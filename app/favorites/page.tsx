"use client"

import Image from "next/image"
import  React, { useState }  from "react"
import logo from "../public/assets/logo-dark.png"
import Link from "next/link"
import { ArrowRightEndOnRectangleIcon, ArrowTrendingUpIcon, BookmarkIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import { Bars3Icon } from "@heroicons/react/24/solid"

function Favorites(){
  const [isOpen, setIsOpen] = useState(false)
  return (
  <div className="flex max-w-[100vw]">
    
    <div 
    className={`
    fixed top-0 left-0 z-[1000]
    transition-all duration-300
    py-[24px] flex flex-col gap-[32px]
    border-r border-[#f1f3f4] w-[230px] h-[100vh] bg-white
    
    ${isOpen ? "translate-x-0 " : "-translate-x-full"}
    md:translate-x-0
  `}>
      <Image src={logo} width={140} height={40} alt="logo" 
      className="my-0 mx-[24px]"
      />
      <div 
      className="flex flex-col"
      >
        <span 
        className="text-[10px] font-medium text-[#565b67]
        uppercase tracking-[1px] mt-0 mx-[24px] my-[8px]
        ">Links</span>
        <Link href="/dashboard" 
        className="my-[2px] mx-[12px] p-[12px] rounded-[12px] text-[#565b67]
        text-[14px] font-medium flex items-center gap-[8px] transition duration-100
        "> 
        <Squares2X2Icon className="w-[15px] h-[15px]"/>


        <span className="text-[#565b67] text-[14px] font-medium cursor-pointer">Dashboard</span>
        </Link>
        <Link href="/favorites" 
        className="my-[2px] mx-[12px] p-[12px] rounded-[12px] text-[#565b67]
        text-[14px] font-medium flex items-center gap-[8px] transition duration-100
        "> 
        <BookmarkIcon className="w-[15px] h-[15px]"/>
        <span className="text-[#565b67] text-[14px] font-medium cursor-pointer">Favorites</span>
        </Link>
       <div className="disabled my-[2px] mx-[12px] p-[12px] text-[#565b67] rounded-[12px] text-[14px] font-medium
       flex items-center gap-[8px] transition duration-100 
       ">
        <MagnifyingGlassIcon className="w-[15px] h-[15px]"/>
        <span className="text-[#565b67] text-[14px] font-medium disabled">Search</span>
       </div>
       <div className="disabled my-[2px] mx-[12px] p-[12px] text-[#565b67] rounded-[12px] text-[14px] font-medium
       flex items-center gap-[8px] transition duration-100 
       ">
        <ArrowTrendingUpIcon className="w-[15px] h-[15px]"/>
        <span className="text-[#565b67] text-[14px] font-medium disabled">Trending</span>
       </div>
      </div>

       <div 
      className="flex flex-col"
      >
        <span 
        className="text-[10px] font-medium text-[#565b67]
        uppercase tracking-[1px] mt-0 mx-[24px] my-[8px]
        ">Extras</span>
        <div
        className="disabled my-[2px] mx-[12px] p-[12px] rounded-[12px] text-[#565b67]
        text-[14px] font-medium flex items-center gap-[8px] transition duration-100
        "> 
        <QuestionMarkCircleIcon className="w-[15px] h-[15px]"/>
        <span className="text-[#565b67] text-[14px] font-medium cursor-pointer">Help & Support</span>
        </div>
        <Link href="/setting" 
        className="my-[2px] mx-[12px] p-[12px] rounded-[12px] text-[#565b67]
        text-[14px] font-medium flex items-center gap-[8px] transition duration-100
        "> 
        <Cog6ToothIcon className="w-[15px] h-[15px]"/>
        <span className="text-[#565b67] text-[14px] font-medium cursor-pointer">Settings</span>
        </Link>
       <div className="disabled my-[2px] mx-[12px] p-[12px] text-[#565b67] rounded-[12px] text-[14px] font-medium
       flex items-center gap-[8px] transition duration-100 
       ">
        <ArrowRightEndOnRectangleIcon className="w-[15px] h-[15px]"/>
        <span className="text-[#565b67] text-[14px] font-medium disabled">Log out</span>
       </div>
       
      </div>
   
    </div>
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 z-[900] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
    />
     <div className={`w-full ml-0 flex flex-col md:ml-[230px] md:w-[calc(100%-230px)]`}>
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
        <h1 className="text-[24px] font-bold mb-[8px]">Saved Movies</h1>
        <h2 className="text-[18px] font-light text-[rgba(64,70,84,.7)]
        pb-[16px] mb-[32px]  border-b-2 border-solid border-[#f1f3f4] w-full 
        ">0 Movies</h2>
        <div
        className="w-full flex items-start flex-wrap gap-[32px]"
        >
          <div className="bg-[#f1f6f4] max-w-fit flex flex-col items-center
          gap-[8px] p-[32px] rounded-[12px] mt-0 mx-auto mb-[56px] text-center
          ">
            <h3 className="font-bold text-[1.17em]">Save your favorite movies!</h3>
            <p>When you save a movie, it will appear here.</p>
          </div>
        </div>
      </div>
    </div>
     </div>
  </div>
    
  )
}

export default Favorites