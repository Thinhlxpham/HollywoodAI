"use client"

import Image from "next/image"
import  React, { useState }  from "react"

import Link from "next/link"
import { ArrowRightEndOnRectangleIcon, ArrowTrendingUpIcon, BookmarkIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Bolt from "../public/assets/bolt.svg"
import SideBar from "../compoments/SideBar"


function Settings(){
  const [isOpen, setIsOpen] = useState(false)
  return (
  <div className="flex max-w-[100vw]">
     <SideBar isOpen={isOpen} />
    
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-[900] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
    />
     <div className="w-full ml-0 flex flex-col md:ml-[230px] md:w-[calc(100%-230px)">
      <div className="w-full h-[80px] border-b-[1px] border-solid border-[#f1f3f4]">
          <div className="gap-[20px] relative w-full h-full max-w-[1400px] flex items-center justify-between py-0
          px-[32px] my-0 mx-auto
          ">
       <div className="bg-[#f1f1f3] flex items-center h-[44px] rounded-[9999px] max-w-[435px] relative w-full">
 
      <MagnifyingGlassIcon className="absolute left-[14px] w-[15px] h-[15px] text-[#565b67]" />
      <input
        type="text"
        placeholder="Search for movies..."
        className="py-[8px] pl-[40px] pr-[16px] w-full h-full rounded-[9999px] bg-transparent outline-none border-none text-[13px] font-medium"
        />
      </div>
      <Bars3Icon onClick={() => setIsOpen(!isOpen)} className="block md:hidden w-[32px] h-[32px] min-w-[32px] min-h-[32px] cursor-pointer"/>
          </div>
    </div>
    <div>
      <div
      className="flex flex-col 
      pt-[40px] pb-[40px] items-start
      max-w-[1400px] w-full h-full justify-between py-0 px-[32px] my-0 mx-auto"
      >
        <h1 className="text-[32px] font-bold mb-[16px]">Settings</h1>
        <div className="flex flex-col items-start gap-[8px] pb-[24px]">
          <h2 className="text-[18px] font-semibold">Your Subscription Plan</h2>
          <span>Basic</span>
          <Link href="/plans"
          className="text-white bg-[#320580] py-[12px] px-[16px] flex justify-center items-center gap-[6px]
          text-[14px] font-medium rounded-[8px]
          "
          >
          <span>Upgrade</span>
           <Image src={Bolt} alt="bolt" width={16} height={16} />

          </Link>
        </div>
        
        <div className="flex flex-col items-start gap-[8px] pb-[24px]">
          <h2 className="text-[18px] font-semibold">Email</h2>
          <span>guest12345@gmail.com</span>
          
        </div>
      </div>
    </div>
     </div>
  </div>
    
  )
}

export default Settings