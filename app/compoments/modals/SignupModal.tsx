"use client";

import { closeSignupModal, openLoginModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Modal } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import PersonIcon from "@mui/icons-material/Person";
import CircularProgress from "@mui/material/CircularProgress";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider } from "@/auth/firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { signInUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

interface LogInModalProps {
  redirectTo?: string;
}

export default function SignupModal({ redirectTo = "/dashboard" }: LogInModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen,
  );

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
      dispatch(closeSignupModal());
    }
  }

  async function handleSignup() {
    setLoading(true);
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential) {
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
    } finally {
      dispatch(closeSignupModal());
    }
  }

  async function logInAsGuest() {
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        "guest12345000@gmail.com",
        "12345678",
      );
      if (userCredential) {


        router.push(redirectTo);
      } else {
        throw new Error("Firebase: Error(auth/user-not-found)");
      }
    } catch (error) {
      console.error("Guest login error:", error);
      alert("Failed to log in as guest. Please try again.");
    } finally {
      setTimeout(() => dispatch(closeSignupModal()), 1500)

    }
    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        signInUser({
          email: currentUser?.email!.split("@")[0],
          password: "",
          uid: "",
        }),
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="max-w-full w-full h-full rounded-none flex flex-col sm:w-full sm:max-w-[400px] sm:h-[640px] p-[32px] border border-solid border-transparent
      sm:rounded-[10px] outline-none absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
      bg-white"
        >
          <XMarkIcon
            onClick={() => dispatch(closeSignupModal())}
            className="w-[25px] h-auto text-[#1f2328] cursor-pointer absolute top-[16px] right-[16px]"
          />
          <h3 className="text-center mb-[20px] text-[32px] font-bold text-[#1f2328]">
            Sign Up
          </h3>
          {error && (
            <span className="text-[#f56c6c] text-[13px] mb-[12px]">
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="py-[8px] px-[16px] h-[44px] outline-none border border-solid border-[#ebebeb] rounded-[12px] w-full"
              />
            </div>
            <div className="py-[12px] space-y-[5px] gap-[12px] w-full mb-[20px]">
              <label className="text-[13px] font-medium text-[#667085]">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Your password"
                className="py-[8px] px-[16px] h-[44px] 
            outline-none border border-solid border-[#ebebeb] rounded-[12px] w-full
            
            "
              />
            </div>

            <button
              className="w-full h-[44px] py-0 px-[20px] text-[15px] font-bold rounded-[9999px] bg-[#320580]
           text-white border-none flex justify-center
          items-center 
          "
              onClick={() => handleSignup()}
            >
              {loading ? (
                "Loading..."
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <div className="mt-[20px] tex-center text-[13px] flex justify-center gap-[4px]">
            <span>Already have an account?</span>
            <span
              className="underline text-[#4f46e5] cursor-pointer"
              onClick={() => {
                dispatch(closeSignupModal());
                dispatch(openLoginModal());

              }}
            >
              Log In
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
