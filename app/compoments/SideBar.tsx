"use client"

import { ArrowRightEndOnRectangleIcon, ArrowTrendingUpIcon, BookmarkIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/assets/logo-dark.png"

export default function SideBar({ isOpen }: { isOpen: boolean }){
   
  return (
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
        <Link href="/settings" 
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
  )
}