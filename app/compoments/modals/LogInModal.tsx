"use client";

import {
  closeLoginModal,
  openForgotModal,
  openSignupModal,
} from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CircularProgress, Modal } from "@mui/material";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/auth/firebase";
import { useRouter } from "next/navigation";


interface LogInModalProps {
  redirectTo?: string;
}

export default function LogInModal({ redirectTo = "/dashboard" }: LogInModalProps) {
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.modals.logInModalOpen);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function logInByGoogle() {
    setLoading(true);
    try {
      const results = await signInWithPopup(auth, provider);
      const user = results.user;

      if (user) {
        router.push(redirectTo);
        return;


      } else {
        throw new Error("Firebase: Error(auth/user-not-found)");
      }
    } catch (error) {
      console.error("Google login error:", error);
      setLoading(false);
    } finally {

      dispatch(closeLoginModal());
    }
  }


  async function handleLogIn() {
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential) {
        dispatch(closeLoginModal());
        router.push(redirectTo);
        return;
      } else {
        throw new Error("Firebase: Error(auth/user-not-found)");
      }
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/email-already-in-use":
          setError("An account with this email already exists.");
          break;
        case "auth/weak-password":
          setError("Password must be at least 6 characters.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
      setLoading(false);
    }
  }

  async function logInAsGuest() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "guest12345000@gmail.com",
        "12345678",
      );
      if (userCredential) {
        dispatch(closeLoginModal());
        router.push(redirectTo);
        return;
      } else {
        throw new Error("Firebase: Error(auth/user-not-found)");
      }
    } catch (error) {
      console.error("Guest login error:", error);
      alert("Failed to log in as guest. Please try again.");
    }
  }

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="max-w-full w-full h-full rounded-none flex flex-col sm:w-full sm:max-w-[400px] sm:h-[640px] p-[32px] border border-solid border-transparent
      sm:rounded-[10px] outline-none absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
      bg-white"
        >
          <XMarkIcon
            onClick={() => dispatch(closeLoginModal())}
            className="w-[25px] h-auto text-[#1f2328] cursor-pointer absolute top-[16px] right-[16px]"
          />
          <h3 className="text-center mb-[20px] text-[32px] font-bold text-[#1f2328]">
            Log In
          </h3>
          {error && (
            <span className="text-[#f56c6c] mb-[16px] text-[14px]">
              {error}
            </span>
          )}
          <div className="flex flex-col gap-[12px]">
            <button
              className="flex justify-start items-center gap-[12px] text-[14px]
          font-normal py-[12px] px-[20px] text-[#404654] border-[3px] border-solid border-[#ebebeb]
          bg-white duration-300 rounded-[12px]
          "
              onClick={() => logInByGoogle()}
            >
              <GoogleIcon className="w-[1em] h-[1em]" />
              <span className="text-[14px] font-medium text-[#404654]">
                Login with Google
              </span>
            </button>
            <button
              className="flex justify-start items-center gap-[12px] text-[14px]
          font-normal py-[12px] px-[20px] text-[#404654] border-[3px] border-solid border-[#ebebeb]
          bg-white duration-300 rounded-[12px]
          "
              onClick={() => logInAsGuest()}
            >
              <PersonIcon className="w-[1em] h-[1em]" />
              <span className="text-[14px] font-medium text-[#404654]">
                Login as Guest
              </span>
            </button>
          </div>
          <div className="my-[24px] mx-0 flex justify-center gap-[32px] text-[rgba(0, 0, 0, .6)] items-center">
            <div className="h-[1px] w-full bg-[rgba(64, 70, 84, .1)] border-[1px] border-solid"></div>
            <div className="text-[13px]">or</div>
            <div className="h-[1px] w-full bg-[rgba(64, 70, 84, .1)] border-[1px] border-solid"></div>
          </div>
          <div className="flex flex-col">
            <div className="py-[12px] space-y-[5px] gap-[12px] w-full">
              <label className="text-[13px] font-medium text-[#667085]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="py-[8px] px-[16px] h-[44px] outline-none border border-solid border-[#ebebeb] rounded-[12px] w-full"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
            <div className="py-[12px] space-y-[5px] gap-[12px] w-full mb-[20px]">
              <label className="text-[13px] font-medium text-[#667085]">
                Password
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="py-[8px] px-[16px] h-[44px] 
            outline-none border border-solid border-[#ebebeb] rounded-[12px] w-full"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <span
              className="text-[13px] text-[#4f46e5] mb-[12px] cursor-pointer text-right"
              onClick={() => {
                dispatch(openForgotModal());
              }}
            >
              Forgot Password?
            </span>

            <button
              className="w-full h-[44px] py-0 px-[20px] text-[15px] font-bold rounded-[9999px] bg-[#320580]
           text-white border-none flex justify-center
          items-center 
          "
              onClick={() => handleLogIn()}
            >
              {loading ? (
                "Loading..."
              ) : (
                "Log In"
              )}
            </button>
          </div>
          <div className="mt-[20px] tex-center text-[13px] flex justify-center gap-[4px]">
            <span>Don't have an account yet?</span>
            <span
              className="underline text-[#4f46e5] cursor-pointer"
              onClick={() => {
                dispatch(closeLoginModal());
                dispatch(openSignupModal());
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
