"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Bars3Icon, ClockIcon, MagnifyingGlassIcon, StarIcon } from "@heroicons/react/24/outline"
import SideBar from "../compoments/SideBar"
import useEmblaCarousel from 'embla-carousel-react'
import MovieCardSkeleton from "../skeleton/MovieCardSkeleton"
import SearchMovieSkeleton from "../skeleton/SearchMovieSkeleton"
import LogInModal from "../compoments/modals/LogInModal"
import { getSubscriptionStatus } from "@/app/payment/getSubscriptionStatus"

interface Movie {
  subscriptionRequired?: string
  id: string
  imageLink: string
  title: string
  director: string
  duration: number
  rating: string

}

// Merged into one shared interface
interface MovieCardProps {
  premium?: string
  image: string
  title: string
  author: string
  duration: number
  rating: string

}

function formatTime(value: number) {
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}


function Dashboard() {
  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [topMovies, setTopMovies] = useState<Movie[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [plan, setPlan] = useState<string | null>(null)

  function getAudioDuration(url: string): Promise<number> {
    return new Promise((resolve) => {
      const audio = new Audio(url);

      audio.addEventListener("loadedmetadata", () => {
        resolve(audio.duration);
      });
    });
  }

  const [selectedRef, selectedApi] = useEmblaCarousel({ loop: true, slidesToScroll: 6 })
  const [topRef, topApi] = useEmblaCarousel({ loop: true, slidesToScroll: 6 })

  const combinedMovies = [...moviesList, ...topMovies]
  const movieSearchPopup = search
    ? combinedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())

    )
    : []

  useEffect(() => {
    async function fetchMoviesList() {
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/selectedMovies')
      const data = await response.json()

      const moviesWithDuration = await Promise.all(
        data.data.map(async (movie: any) => {
          if (!movie.audioLink) return { ...movie, duration: 0 }

          const duration = await getAudioDuration(
            `https://advanced-internship-api-production.up.railway.app/${movie.audioLink}`
          )

          return { ...movie, duration }
        })
      )
      setMoviesList(moviesWithDuration)
      setLoading(false)
    }
    async function fetchTopMovies() {
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/topMovies')
      const data = await response.json()
      const moviesWithDuration = await Promise.all(
        data.data.map(async (movie: any) => {
          if (!movie.audioLink) return { ...movie, duration: 0 }

          const duration = await getAudioDuration(
            `https://advanced-internship-api-production.up.railway.app/${movie.audioLink}`
          )

          return { ...movie, duration }
        })
      )
      setTopMovies(moviesWithDuration)
      setLoading(false)
    }
    fetchMoviesList()
    fetchTopMovies()

  }, [])

  useEffect(() => {
    const fetchPlan = async () => {
      const result = await getSubscriptionStatus()
      setPlan(result)
    }

    fetchPlan()
  }, [])

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
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                placeholder="Search for movies..."
                className="py-[8px] pl-[40px] pr-[16px] w-full h-full rounded-[9999px] bg-transparent outline-none border-none text-[13px] font-medium"

              />

            </div>

            <Bars3Icon onClick={() => setIsOpen(!isOpen)} className="block md:hidden w-[32px] h-[32px] min-w-[32px] min-h-[32px] cursor-pointer" />
            <div
              className="flex flex-col absolute bg-white w-full max-w-[440px] overflow-y-auto max-h-[440px]
              top-[80px] left-[32px] right-[32px] border border-solid border-[#e1e7ea] shadow-[0_0_6px_0_rgba(0,0,0,0.14)] z-10 rounded-[20px]
            ">
              {search && movieSearchPopup.length >= 1 && (<div

                className="py-[12px] px-[24px] text-[16px] font-medium border border-b border-solid border-[#e1e7ea]
              sticky top-0 bg-white z-2"
              >
                <h3 className="text-[16px] font-bold text-[#1f2328]">Search Results</h3>
              </div>)}

              {search && movieSearchPopup.length === 0 && (
                <div className="p-[24px] text-[14px] text-[rgba(64,70,84,.7)]">No results found.</div>
              )}
              {!loading ? movieSearchPopup.map((movie) => (


                <Link
                  key={movie.id}
                  href={`/movies/${movie.id}`}
                  className="flex items-center p-[24px] gap-[24px] h-[120px] border border-solid border-b-[#e1e7ea] duration-150 text-black"
                >
                  <img
                    src={movie.imageLink}
                    alt={movie.title}
                    className="w-auto h-[88px] rounded-[4px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-[16px] font-bold">{movie.title}</span>
                    <span className="text-[14px] text-[rgba(64,70,84,.7)]">{movie.director}</span>
                  </div>
                </Link>


              )) : new Array(movieSearchPopup.length).fill(0).map((_, index) => <SearchMovieSkeleton key={index} />)}
            </div>
          </div>
        </div>

        <div className="w-full py-[24px] px-0 border-b border-[#f1f3f4] border-solid">
          <div className="w-full h-full max-w-[1400px] flex items-center justify-between py-0 px-[32px] my-0 mx-auto">
            <div>
              <h1 className="text-[33px] font-bold">AI Movie Summariser</h1>
              <span className="text-[rgba(64,70,84,.7)] text-[14px] mt-[4px]">
                Enjoy high-quality summaries of your favourite movies instantly without breaking a sweat.
              </span>
            </div>
          </div>
        </div>


        <div className="pt-[40px]">
          <div className="flex flex-col items-start w-full h-full max-w-[1400px] justify-between py-0 px-[32px] my-0 mx-auto">
            <h2 className="text-[22px] font-bold">Selected just for you</h2>
            <span className="text-[rgba(64,70,84,.7)] text-[14px] mt-[4px] mb-[16px]">We think you'll like these.</span>
            <div className="overflow-hidden w-full" ref={selectedRef}>
              <div className="flex gap-[20px]">
                {!loading ? moviesList.map((movie) => (
                  <Link key={movie.id} className="flex-[0_0_160px] min-w-0 pl-[20px]" href={`/movies/${movie.id}`}>

                    <MovieCard
                      image={movie.imageLink}

                      premium={
                        movie.subscriptionRequired && !plan
                          ? "Premium"
                          : undefined
                      }
                      title={movie.title}
                      author={movie.director}
                      duration={movie.duration}
                      rating={movie.rating}
                    />


                  </Link>
                )) : new Array(6).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
              </div>
            </div>
          </div>
        </div>


        <div className="p-[40px_0_88px]">
          <div className="w-full h-full max-w-[1400px] flex justify-between py-0 px-[32px] my-0 mx-auto flex-col items-start">
            <h2 className="text-[22px] font-bold">Top Movies</h2>
            <span className="text-[rgba(64,70,84,.7)] text-[14px] mt-[4px] mb-[16px]">Enjoy our highest rated films.</span>
            <div className="overflow-hidden w-full" ref={topRef}>
              <div className="flex gap-[20px]">
                {!loading ? topMovies.map((movie) => (
                  <Link key={movie.id} className="flex-[0_0_160px] min-w-0 pl-[20px]" href={`/movies/${movie.id}`}>

                    <MovieCard
                      image={movie.imageLink}

                      premium={
                        movie.subscriptionRequired && !plan
                          ? "Premium"
                          : undefined
                      }
                      title={movie.title}
                      author={movie.director}
                      duration={movie.duration}
                      rating={movie.rating}
                    />


                  </Link>
                )) : new Array(6).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogInModal />
    </div>
  )
}


function MovieCard({ premium, image, title, author, duration, rating }: MovieCardProps) {
  return (
    <div className="w-full text-[#000]">
      <div className="relative">
        {premium && (
          <div className="bg-[rgba(50,5,128,.767)] rounded-[24px] text-white text-[10px] font-light left-[50%] py-[3px] px-[10px] absolute top-[-10px] -translate-x-1/2 z-10">
            {premium}
          </div>
        )}
        <figure className="h-auto aspect-[2/3] mb-[4px] rounded-[12px] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </figure>


      </div>
      <div className="flex flex-col w-full">
        <span className="text-[14px] font-bold mb-[4px]">{title}</span>
        <span className="text-[12px] text-[rgba(64,70,84,.7)] font-light mb-[4px]">{author}</span>
        <div className="flex gap-[8px]">
          <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
            <ClockIcon className="w-[1em] h-[1em]" />
            <span>{formatTime(duration)}</span>
          </div>
          <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
            <StarIcon className="w-[1em] h-[1em]" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard