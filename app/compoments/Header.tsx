"use client"

import Image from "next/image";
import React from 'react'
import Bolt from "../public/assets/bolt.svg"
import { PlayIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { openSignupModal } from "@/redux/slices/modalSlice";

export default function Header() {
  const dispatch: AppDispatch = useDispatch()
  return (
    <header className="relative bg-[linear-gradient(120deg,#70acd4,#ca71ff_20%,#8469cc_30%,#4882e6_50%,#8469cc_70%,#70acd4)]
    py-[208px] h-[90vh] flex items-center bg-[length:200%_200%] animate-gradient-animation px-[10px] sm:px-[30px]
    ">
      <div className="flex flex-col items-center justify-center mx-auto my-0">
        <div className="flex items-center p-[5px_13px_3px_13px] bg-[#ffffff26]
          rounded-[20px] text-[10px] font-bold gap-[6px] mb-[32px] 
          ">
          <span className="text-white">Meet HollywoodAI</span>
          <span className="text-[6px]">⏺</span>
          <span className="text-[#e5e6e6] opacity-[60%]">Unleash the Power of AI</span>
        </div>
        <h1 className="text-[52px] sm:text-[68px] md:text-[84px] font-bold tracking-[-2.1px] leading-[50px] md:leading-[77px]
           text-center text-white
           mb-[28px] 
           ">Ultimate AI
          <br />
          <span className="inline-flex items-center gap-3">
            Summariser
            <Image src={Bolt} width={47} height={62} alt="Bolt" data-nimg="1" loading="lazy"
              className="hidden sm:inline-block translate-y-1 ps-[5px] 
          
          "/>
          </span>

        </h1>
        <p
          className="
          text-[20px] font-medium leading-[25px] max-w-[480px] w-full opacity-75 text-[rgb(229,230,230)] text-center mb-[20px]
          ">All-in-one platform to watch your favourite movies in minutes using AI.</p>
        <button onClick={() => dispatch(openSignupModal())} className="py-[12px] px-[16px] font-semibold bg-[rgba(0,0,0,0.1)]
          flex items-center justify-center text-[17px] leading-[20px]
          gap-[16px] rounded-[48px] h-[64px] cursor-pointer transition duration-300
          outline-none
          ">
          <div className="w-[40px] h-[40px] p-[12px] rounded-[50%] bg-[#fff] text-[#37393d]
            text-[10px] flex items-center justify-center
            "
          >
            <PlayIcon className="w-[16px] h-[16px] text-[12px] flex!important items-center justify-center" />

          </div>
          <span className="text-[17px] leading-[20px] cursor-pointer text-white font-semibold">See how it works</span>
        </button>
      </div>
      <svg
        className="absolute bottom-[-2px] left-0 right-0 h-auto w-full block fill-[#f9f9fb]"
        preserveAspectRatio="none"
        width="1440"
        height="105"
        viewBox="0 0 1440 105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0C240 68.7147 480 103.072 720 103.072C960 103.072 1200 68.7147 1440 0V104.113H0V0Z"


        />
      </svg>
    </header>
  )
}