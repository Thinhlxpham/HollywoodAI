"use client"

import Image from "next/image"
import  React, { useState }  from "react"
import logo from "../public/assets/logo-dark.png"
import Link from "next/link"
import { ArrowRightEndOnRectangleIcon, ArrowTrendingUpIcon, Bars3Icon, BookmarkIcon, ClockIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Squares2X2Icon, StarIcon } from "@heroicons/react/24/outline"
import {Cog6ToothIcon} from "@heroicons/react/24/solid"



function Dashboard(){
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
            <div className="overflow-x-hidden w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6  gap-[20px] w-full">
                <MovieList 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <MovieList 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <MovieList 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <MovieList 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <MovieList 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <MovieList 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                
               
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
                <TopMovieList 
                premium="Premium" 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <TopMovieList 
                premium="Premium" 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <TopMovieList 
                premium="Premium" 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <TopMovieList 
                premium="Premium" 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <TopMovieList 
                premium="Premium" 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                <TopMovieList 
                premium="Premium" 
                image='https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UY281_CR0,0,190,281_.jpg'
                title="Avatar"
                author="James Cameron"
                time="10:00"
                rating="7.9"
                />
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}
interface MovieListProp{
  premium?: string,
  image: string,
  title: string,
  author: string,
  time: string,
  rating: string
}

function MovieList({image, title, author, time, rating}: MovieListProp){
  return (
    <div className="w-full">
      <Link href="/movie" className="text-[#000]">
      
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
                <ClockIcon className="w-[1em] h-[1em]"/>
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
                <StarIcon className="w-[1em] h-[1em]"/>
                <span>{rating}</span>
              </div>
            </div>

          </div>
        
      </Link>
    </div>
  )
}

interface TopMovieListProp{
  premium?: string,
  image: string,
  title: string,
  author: string,
  time: string,
  rating: string
}

function TopMovieList({premium, image, title, author, time, rating}: TopMovieListProp){
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
                <ClockIcon className="w-[1em] h-[1em]"/>
                <span>{time}</span>
              </div>
              <div className="flex items-center gap-[4px] text-[12px] font-light text-[rgba(64,70,84,.7)]">
                <StarIcon className="w-[1em] h-[1em]"/>
                <span>{rating}</span>
              </div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Dashboard