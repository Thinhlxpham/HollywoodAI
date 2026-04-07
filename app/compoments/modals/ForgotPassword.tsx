"use client"

import { closeForgotModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CircularProgress, Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function ForgotPassword(){
  const isOpen = useSelector((state:RootState) => 
    state.modals.forgotModalOpen
     )

  const dispatch: AppDispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  function handleForgotPassword(){
    alert(`A Password Reset Link has been sent to ${email}`)
    setLoading(true)
  }
  return (
    <>
    <Modal open={isOpen} onClose={() => dispatch(closeForgotModal())}
    className="flex justify-center items-center"  
    >
      <div className="max-w-full w-full h-full rounded-none flex flex-col sm:w-full sm:max-w-[400px] sm:h-[640px] p-[32px] border border-solid border-transparent
      sm:rounded-[10px] outline-none absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
      bg-white">
        <XMarkIcon onClick={() => dispatch(closeForgotModal())} className="w-[25px] h-auto text-[#1f2328] cursor-pointer absolute top-[16px] right-[16px]"/>
        <h3 className="text-center mb-[20px] text-[32px] font-bold text-[#1f2328]">Forgot Password</h3>
        <form className="flex flex-col">
          <div className="py-[12px] space-y-[5px] gap-[12px] w-full">
            <label className="text-[13px] font-medium text-[#667085]">
              Email Address
            </label>
            <input type="email" placeholder="your@email.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className="py-[8px] px-[16px] h-[44px] outline-none border border-solid border-[#ebebeb] rounded-[12px] w-full"
            />
          </div>
          <button className="w-full h-[44px] py-0 px-[20px] text-[15px] 
          font-medium rounded-[9999px] bg-[#320580]
          text-white border-none flex justify-center items-center cursor-pointer
          " onClick={() => handleForgotPassword()}>{loading ? <CircularProgress className="w-[20px] h-[20px]"/> :"Send Instructions"}</button>
        </form>
      </div>
    </Modal>
    </>
  )
}