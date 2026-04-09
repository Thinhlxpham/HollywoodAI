"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Bars3Icon, ClockIcon, MagnifyingGlassIcon, StarIcon } from "@heroicons/react/24/outline"
import SideBar from "../compoments/SideBar"
import useEmblaCarousel from 'embla-carousel-react'

interface Movie {
  subscriptionRequired?: string
  id: string
  imageLink: string
  title: string
  director: string
  duration: number
  rating: string
}
interface MovieListProp {
  premium?: string,
  image: string,
  title: string,
  author: string,
  time: string,
  rating: string
}
interface TopMovieListProp {
  premium?: string,
  image: string,
  title: string,
  author: string,
  time: string,
  rating: string
}



function Dashboard() {
  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [topMovies, setTopMovies] = useState<Movie[]>([])
  const [isOpen, setIsOpen] = useState(false)


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 6 })

  



  useEffect(() => {
    async function fetchMoviesList() {
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/selectedMovies')
      const data = await response.json()
      const movies = data.data


  setMoviesList(movies)
    }
    async function fetchTopMovies() {
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/topMovies')
      const data = await response.json()
      setTopMovies(data.data)
    }
    fetchMoviesList()
    fetchTopMovies()
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
            <Bars3Icon onClick={() => setIsOpen(!isOpen)} className="block md:hidden w-[32px] h-[32px] min-w-[32px] min-h-[32px] cursor-pointer" />
          </div>
        </div>
        <div
          className="w-full py-[24px] px-0 border-b border-[#f1f3f4] border-solid">
          <div
            className="w-full h-full max-w-[1400px] flex items-center justify-between py-0 px-[32px] my-0 mx-auto"
          >
            <div>
              <h1 className="text-[33px] font-bold">AI Movie Summariser</h1>
              <span
                className="text-[rgba(64,70,84,.7)] text-[14px] mt-[4px]"
              >Enjoy high-quality summaries of your favourite movies instantly without breaking a sweat.</span>
            </div>

          </div>
        </div>
        <div className="pt-[40px]">
          <div className="flex flex-col items-start w-full h-full max-w-[1400px] justify-between py-0 px-[32px]
        my-0 mx-auto
        ">
            <h2 className="text-[22px] font-bold ">Selected just for you</h2>
            <span className="text-[rgba(64,70,84,.7)] text-[14px] mt-[4px] mb-[16px]">We think you’ll like these.</span>
            <div className="flex max-w-full w-full">

              <div className="[--slide-size:100%] overflow-hidden">
                  <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex gap-[20px]">
                    {moviesList.map((movie) => (
                      <div
                        key={movie.id}
                        className="flex-[0_0_160px] min-w-0 gap-[20px]"
                      >
                        <MovieList
                          image={movie.imageLink}
                          premium={movie.subscriptionRequired ? "Premium" : ""}
                          title={movie.title}
                          author={movie.director}
                          time="10:00"
                          rating={movie.rating}
                        />
                      </div>
                    ))}
                  </div>
                


              </div>

              </div>
              


            </div>
          </div>
        </div>
        <div className="p-[40px_0_88px]">
          <div
            className="w-full h-full max-w-[1400px] flex justify-between py-0 px-[32px] my-0 mx-auto flex-col items-start">
            <h2 className="text-[22px] font-bold">Top Movies</h2>
            <span className="text-[rgba(64,70,84,.7)] text-[14px] mt-[4px] mb-[16px]">Enjoy our highest rated films.</span>
            <div className="flex max-w-full w-full">
              <div className="overflow-x-hidden w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[20px] w-full">
                  {topMovies.map((movie) => (
                    <TopMovieList
                      key={movie.id}
                      premium="Premium"
                      image={movie.imageLink}
                      title={movie.title}
                      author={movie.director}
                      time="10:00"
                      rating={movie.rating}
                    />
                  ))}



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


function MovieList({ premium, image, title, author, time, rating }: MovieListProp) {
  return (
    <div className="w-full">
      <Link href="/movie" className="text-[#000]">
        <div className="relative">
          {premium && <div
            className="bg-[rgba(50,5,128,.767)] rounded-[24px] text-white text-[10px] font-light
             left-[50%] py-[3px] px-[10px] absolute top-[-10px] -translate-x-1/2 z-10
            "
          >{premium}</div>}

        </div>
        <figure className="h-auto aspect-[2/3] mb-[4px] rounded-[12px] relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </figure>
        <div className="flex flex-col w-full">
          <span className="text-[14px] font-bold mb-[4px]">{title}</span>
          <span className="text-[12px] text-[rgba(64,70,84,.7)] font-light mb-[4px]">{author}</span>
          <div className="flex gap-[8px]">
            <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
              <ClockIcon className="w-[1em] h-[1em]" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
              <StarIcon className="w-[1em] h-[1em]" />
              <span>{rating}</span>
            </div>
          </div>

        </div>

      </Link>
    </div>
  )
}



function TopMovieList({ premium, image, title, author, time, rating }: TopMovieListProp) {
  return (
    <div className="w-full">
      <Link href="/movie" className="text-[#000]">
        <div className="relative">
          {premium && <div
            className="bg-[rgba(50,5,128,.767)] rounded-[24px] text-white text-[10px] font-light
             left-[50%] py-[3px] px-[10px] absolute top-[-10px] -translate-x-1/2 z-10
            "
          >{premium}</div>}
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
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
              <StarIcon className="w-[1em] h-[1em]" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Dashboard