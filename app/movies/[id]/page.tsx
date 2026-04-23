"use client"

import SideBar from "@/app/compoments/SideBar";
import { Bars3Icon, BookmarkIcon, CalendarIcon, ClockIcon, MagnifyingGlassIcon, StarIcon } from "@heroicons/react/24/outline";

import { BookmarkSlashIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Bolt from "../../public/assets/bolt.svg"
import Image from "next/image";
import MovieIndividualSkeleton from "@/app/skeleton/MovieIndividualSkeleton";
import Link from "next/link";

function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "00:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [movie, setMovie] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)

  async function IndividualMovie() {
    const response = await fetch(`https://advanced-internship-api-production.up.railway.app/movies/${id}`);
    const data = await response.json()
    const result = data.data
    setMovie(result)
    setLoading(false)
  }
  useEffect(() => {
    IndividualMovie()
    setLoading(true)
  }, [id])

  function saveFavoriteMovie() {
    const stored = localStorage.getItem("favorites")
    const favorites = stored ? JSON.parse(stored) : []

    const exists = favorites.find((m: any) => m.id === movie.id)

    let updated

    if (exists) {
      // remove
      updated = favorites.filter((m: any) => m.id !== movie.id)
      setIsFavorite(false)
    } else {
      // add
      updated = [...favorites, movie]
      setIsFavorite(true)
    }

    localStorage.setItem("favorites", JSON.stringify(updated))
  }


  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    if (!stored) return

    const favorites = JSON.parse(stored)
    const exists = favorites.find((m: any) => m.id === id)

    setIsFavorite(!!exists)
  }, [id])



  return (
    <div className="flex max-w-[100vw]">
      <SideBar isOpen={isOpen} />

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[900] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      />
      <div className={`w-full ml-0 flex flex-col md:ml-[230px] md:w-[calc(100%-230px)]`}>
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

        {!loading ? <div
          className="pt-[40px] pb-[40px] flex lg:items-start w-full h-full max-w-[1400px] justify-between py-0 px-[32px] my-0 mx-auto flex-col-reverse lg:flex-row md:items-center ">
          <div className="flex flex-col w-full">
            <h1 className="text-[36px] mb-[4px] font-semibold">{movie?.title}</h1>
            <span className="mb-[8px] font-light text-[rgba(64,70,84,.7)]">{movie?.director}</span>
            <span className="text-[18px] mb-[16px] font-light italic"></span>


            <div
              className="border-y border-solid border-y-[#e1e7ea] py-[16px] px-0 mb-[24px]"
            >
              <div
                className="flex flex-wrap max-w-[400px] gap-y-3"
              >
                <div
                  className="flex items-center w-[50%] font-normal text-[14px] gap-[6px]"
                >
                  <StarIcon className="w-[1em] h-[1em]" />
                  <span >{movie?.rating} / 10</span>
                </div>
                <div
                  className="flex items-center w-[50%] font-normal text-[14px] gap-[6px]"
                >
                  <ClockIcon className="w-[1em] h-[1em]" />
                  <span>{formatTime(movie?.duration)}</span>
                </div>
                <div
                  className="flex items-center w-[50%] font-normal text-[14px] gap-[6px]"
                >
                  <MicrophoneIcon className="w-[1em] h-[1em]" />
                  <span>{movie?.type}</span>
                </div>
                <div
                  className="flex items-center w-[50%] font-normal text-[14px] gap-[6px]"
                >
                  <CalendarIcon className="w-[1em] h-[1em]" />
                  <span>{movie?.releaseYear}</span>
                </div>


              </div>

            </div>
            <Link href={`/player/${id}`}
            >
              <button
                className="flex items-center cursor-pointer gap-[8px]
                justify-center max-w-[280px] w-full h-[48px] bg-[#320580] text-white text-[16px]
                rounded-[4px] border-none mb-[24px] transition-opacity duration-200 p-[16px]
                "

              >
                {!loading ?
                  <>
                    <span>Summarise</span>
                    <Image src={Bolt} width={16} height={16} alt="bolt" />
                  </>
                  : <span>Loading...</span>}
              </button>

            </Link>

            <div
              className="text-[#0365f2] font-normal mb-[40px] text-[18px] transition-colors duration-200
                flex items-center cursor-pointer gap-[8px]
                "
              onClick={() => saveFavoriteMovie()}
            >
              {!isFavorite ?
                <>
                  <BookmarkIcon className="w-[20px] h-[20px] text-[#0365f2]" />
                  <span>Add to Favorites</span>
                </>
                :
                <>
                  <BookmarkSlashIcon className="w-[20px] h-[20px] text-[#0365f2] " />
                  <span>Remove Favorites</span>
                </>
              }
            </div>
            <h2 className="text-[18px] mb-[16px] font-semibold">What's it about?</h2>
            <div
              className="flex flex-wrap gap-[16px] mb-[16px]"
            >
              {movie?.tags.map((name: string) => <TypeMovie text={name} />)}
            </div>
            <p className="whitespace-wrap overflow-hidden text-ellipsis line-clamp-3 h-full">{movie?.movieDescription}</p>
          </div>
          <div
            className="w-full md:w-[200px] md:min-w-[200px] aspect-[2/3] md:ml-[32px] rounded-[12px] overflow-hidden mb-[24px] md:mb-0 max-w-[300px] mx-auto md:mx-0 md:flex"
          >
            <Image src={movie?.imageLink} width={100} height={100} className="w-full h-full" alt={movie?.id} />
          </div>

        </div> : <MovieIndividualSkeleton />}

      </div>

    </div>

  )
}

interface TypeMovieProp {
  text: string
}

function TypeMovie({ text }: TypeMovieProp) {
  return (
    <div
      className="bg-[#f1f6f4] py-0 px-[16px] h-[48px] flex items-center font-normal rounded-[4px] 
      transition-colors duration-200
      "
    >{text}</div>
  )
}