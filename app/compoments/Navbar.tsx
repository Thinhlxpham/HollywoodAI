"use client"

import Image from 'next/image'
import React from 'react'
import logo from "../public/assets/logo-dark.png"
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { openLoginModal, openSignupModal } from '@/redux/slices/modalSlice'
import { AppDispatch } from '@/redux/store'

function Navbar(){
  const dispatch: AppDispatch = useDispatch()
  
  return (
    <nav className="px-[10px] h-[76px] py-[18px] sm:px-[30px] 
    flex justify-between items-center sticky top-0 z-[999]
    bg-white shadow-[0_3px_12px_rgba(0,0,0,0.1)]
    ">
    <Link href="#">
    <Image src={logo} 
      alt="logo"  
      width={140}
       height={40}
        className="h-full" />
    </Link>
      <div className="hidden lg:flex gap-[16px] ">
       <NavLink text="About"/>
       <NavLink text="Features"/>
       <NavLink text="How it works"/>
       <NavLink text="Privacy Policy"/>
      </div>
      <div className="flex items-center gap-[10px]">
       
        <button className="cursor-pointer h-[40px] text-[15px] font-semibold py-[10px] px-[16px] 
        flex items-center justify-center rounded-[8px] transition duration-200 ease bg-[#00000019]
        outline-none hover:text-white hover:bg-black hover:scale-[1.1]"
        onClick={() => dispatch(openSignupModal())}
        >Sign Up</button>
      </div>
    </nav>
  )
}

interface NavLinkProp{
  text: string
}

function NavLink({text}: NavLinkProp){
  return (
    <>
    <Link href="#"
         className="text-[14px] py-[7px] px-[14px] text-[#070707] font-semibold hover:bg-[#0000000f] cursor-not-allowed rounded-[8px]">
        {text}
        </Link>
    </>
  )
}

export default Navbar