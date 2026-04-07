"use client"

import Image from "next/image"
import logoBolt from "../public/assets/bolt.svg"
import logoLight from "../public/assets/logo-light.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { openSignupModal } from "@/redux/slices/modalSlice"


const socialLinks = [
  { icon: faInstagram, label: "Instagram" },
  { icon: faTwitter, label: "Twitter" },
  { icon: faFacebook, label: "Facebook" },
  { icon: faTiktok, label: "Tiktok" },
]

export default function Footer() {
  const dispatch: AppDispatch = useDispatch()
  return (
    <footer
      className="mt-[120px] text-white"
      style={{
        background: `radial-gradient(circle at 0% -30%, #a12a91, rgba(33, 13, 123, 0.83), transparent, transparent, transparent)`,
        backgroundColor: "black",
      }}
    >
      {/* CTA */}
      <div id="cta">
        <svg
          className="w-full fill-[#f9f9fb]"
          preserveAspectRatio="none"
          width="1440"
          height="86"
          viewBox="0 0 1440 86"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 85.662C240 29.1253 480 0.857 720 0.857C960 0.857 1200 29.1253 1440 85.662V0H0V85.662Z" />
        </svg>

        <div className="max-w-[1280px] mx-auto px-5">
          <div className="flex flex-col items-center">
            {/* Widget */}
            <p className="mb-9 text-[10px] font-semibold uppercase tracking-[1px] flex flex-col items-center gap-2 sm:flex-row">
              <span className="py-1 px-3 bg-[rgb(38,38,38)] rounded-xl mr-2">
                HollywoodAI
              </span>
              Endless benefits, one subscription.
            </p>

            {/* Title */}
            <h2 className="text-[100px] max-w-[569px] w-full leading-[100px] text-center mb-8 max-[640px]:text-[92px] max-[480px]:text-[56px] max-[480px]:leading-none">
              Start your free trial.
            </h2>

            {/* Para */}
            <p className="text-[20px] font-normal leading-[25px] opacity-50 max-w-[440px] w-full text-center mb-9 px-0 max-[480px]:px-5">
              Enjoy your favourite movies in minutes by letting AI do the work for you.
            </p>

            {/* Button */}
            <button
            onClick={() => dispatch(openSignupModal())}
            className="flex items-center justify-center gap-3 text-white rounded-xl py-4 px-7 font-semibold bg-[#1a1a1a] border-none transition-transform duration-300 hover:scale-110 cursor-pointer">
              <span>Join HollywoodAI</span>
              <Image src={logoBolt} alt="" className="w-[14px] h-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div id="links" className="w-full border-t border-b border-[#ffffff1f]">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto py-8 px-5 flex-col gap-7 sm:flex-row sm:gap-0">
          <Image src={logoLight} alt="HollywoodAI" className="w-[132px]" />
          <div className="flex gap-[30px] flex-wrap justify-center">
            {socialLinks.map(({ icon, label }) => (
              <a 
                key={label}
                href="#"
                className="text-white text-sm flex items-center cursor-not-allowed"
              >
                <FontAwesomeIcon icon={icon} className="w-[14px] mr-[12px]" />

              
                
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div id="copyright">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto py-8 px-5 flex-col gap-6 sm:flex-row">
          <div className="flex gap-3 flex-col sm:flex-row w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-5 px-7 bg-[#ffffff11] rounded-lg outline-none border-none text-base text-white w-full text-center sm:text-left"
            />
            <button
              type="button"
              className="py-[18px] px-[30px] text-[15px] font-bold text-white bg-[#ffffff11] border-none rounded-lg w-full cursor-not-allowed sm:w-auto"
            >
              Subscribe
            </button>
          </div>
          <span className="text-[#e5e6e6] text-sm">
            2024 Copyright © Hollywood AI
          </span>
        </div>
      </div>
    </footer>
  )
}