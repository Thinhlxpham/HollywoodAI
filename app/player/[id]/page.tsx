"use client"

import SideBar from "@/app/compoments/SideBar";
import Control from "@/app/compoments/volume/Control";
import PlayerSkeleton from "@/app/skeleton/PlayerSkeleton";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BackwardIcon, ForwardIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";




export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [movie, setMovie] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  async function IndividualMovie() {
    const response = await fetch(`https://advanced-internship-api-production.up.railway.app/movies/${id}`);
    const data = await response.json()
    const result = data.data
    setMovie(result)
    setLoading(false)
  }
  useEffect(() => {
    IndividualMovie()

  }, [id])
  return (
    <div className="flex max-w-[100vw]">
      <SideBar isOpen={isOpen} />

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[900] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      />
      {loading ? <PlayerSkeleton /> : <div className={`w-full ml-0 flex flex-col md:ml-[230px] md:w-[calc(100%-230px)]`}>
        <div className="w-full h-[80px] border-b-[1px] border-solid border-[#f1f3f4]">
          <div className="gap-[20px] relative w-full h-full max-w-[1400px] flex items-center justify-between py-0 px-[32px] my-0 mx-auto">
            <div className="bg-[#f1f1f3] flex items-center h-[44px] rounded-[9999px] max-w-[435px] relative w-full">
              <MagnifyingGlassIcon className="absolute left-[14px] w-[15px] h-[15px] text-[#565b67]" />
              <input
                type="text"
                placeholder="Search for movies..."
                className="py-[8px] pl-[40px] pr-[16px] w-full h-full rounded-[9999px] bg-transparent outline-none border-none text-[13px] font-medium"
              />
            </div>
            <Bars3Icon onClick={() => setIsOpen(!isOpen)} className="block md:hidden w-[32px] h-[32px] min-w-[32px] min-h-[32px] cursor-pointer" />
          </div>
        </div>
        <div className="pt-[40px] relative w-full overflow-y-auto h-[calc(100vh - 160px)]">
          <div className="flex flex-col w-full h-full max-w-[1400px] items-center justify-between py-0 px-[32px] my-0 mx-auto ">
            <h1 className="w-full text-[24px] pb-[16px] mb-[32px] border-b border-solid border-b-[#e1e7ea] font-bold">{movie?.title}</h1>
            <p>{movie?.summary}</p>
          </div>
          <div
            className="h-[180px] py-[16px] px-[24px] w-full md:h-[80px] mt-auto flex flex-col md:flex-row items-center justify-between bg-[#042330]
              text-white border-t-[1px] md:py-0 md:px-[40px] fixed bottom-0 left-0 z-[9998]
              ">
            <Control params={{ id }} />
          </div>
        </div>

      </div>}
    </div>
  )
}