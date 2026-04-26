"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import logo from "../public/assets/logo-dark.png"
import Link from "next/link"
import { ArrowRightEndOnRectangleIcon, ArrowTrendingUpIcon, BookmarkIcon, Cog6ToothIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, Squares2X2Icon } from "@heroicons/react/24/outline"
import { Bars3Icon } from "@heroicons/react/24/solid"
import SideBar from "../compoments/SideBar"
import SearchMovieSkeleton from "../skeleton/SearchMovieSkeleton"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/auth/firebase"
import logIn from "../public/assets/login.png"
import { openLoginModal } from "@/redux/slices/modalSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import LogInModal from "../compoments/modals/LogInModal"
import FavoritesSkeleton from "../skeleton/FavoritesSkeleton"

interface Movie {
  subscriptionRequired?: string
  id: string
  imageLink: string
  title: string
  director: string
  duration: number
  rating: string
}




function Favorites() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [moviesList, setMoviesList] = useState<Movie[]>([])
  const [topMovies, setTopMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [favorites, setFavorites] = useState<Movie[]>([])
  const [loadingUser, setLoadingUser] = useState(true)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
      setLoadingUser(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem("favorites")
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  const dispatch: AppDispatch = useDispatch()

  const combineMovies = [...moviesList, ...topMovies]
  const movieSearchPopup = search
    ? combineMovies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    )
    : []

  useEffect(() => {
    async function fetchMoviesList() {
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/selectedMovies')
      const data = await response.json()
      setMoviesList(data.data)
      setLoading(false)
    }
    async function fetchTopMovies() {
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/topMovies')
      const data = await response.json()
      setTopMovies(data.data)
      setLoading(false)
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
            <Bars3Icon
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden w-[32px] h-[32px] min-w-[32px] min-h-[32px] cursor-pointer"
            />
            <div className="flex flex-col absolute bg-white w-full max-w-[440px] overflow-y-auto max-h-[440px] ml-auto
              top-[80px] left-[32px] border border-solid border-[#e1e7ea] shadow-[0_0_6px_0_rgba(0,0,0,0.14)] z-10 rounded-[20px]">
              {search && movieSearchPopup.length >= 1 && (
                <div className="py-[12px] px-[24px] text-[16px] font-medium border border-b border-solid border-[#e1e7ea] sticky top-0 bg-white z-2">
                  <h3 className="text-[16px] font-bold text-[#1f2328]">Search Results</h3>
                </div>
              )}
              {search && movieSearchPopup.length === 0 && (
                <div className="p-[24px] text-[14px] text-[rgba(64,70,84,.7)]">No results found.</div>
              )}
              {!loading
                ? movieSearchPopup.map((movie) => (
                  <Link
                    key={movie.id}
                    href={`/movies/${movie.id}`}
                    className="flex items-center p-[24px] gap-[24px] h-[120px] border border-solid border-b-[#e1e7ea] duration-150 text-black"
                  >
                    <img src={movie.imageLink} alt={movie.title} className="w-auto h-[88px] rounded-[4px]" />
                    <div className="flex flex-col">
                      <span className="text-[16px] font-bold">{movie.title}</span>
                      <span className="text-[14px] text-[rgba(64,70,84,.7)]">{movie.director}</span>
                    </div>
                  </Link>
                ))
                : new Array(movieSearchPopup.length).fill(0).map((_, index) => <SearchMovieSkeleton key={index} />)}
            </div>
          </div>
        </div>


        {loadingUser ? (
          <FavoritesSkeleton />
        ) : isLoggedIn ? (
          <div className="flex flex-col pt-[40px] pb-[40px] items-start max-w-[1400px] w-full h-full justify-between py-0 px-[32px] my-0 mx-auto">
            <h1 className="text-[24px] font-bold mb-[8px]">Saved Movies</h1>
            <h2 className="text-[18px] font-light text-[rgba(64,70,84,.7)] pb-[16px] mb-[32px] border-b-2 border-solid border-[#f1f3f4] w-full">
              {favorites.length} Movies
            </h2>
            {favorites.length > 0 ? (
              <div className="w-full flex flex-wrap gap-[32px]">
                {favorites.map((movie) => (
                  <Link key={movie.id} href={`/movies/${movie.id}`}>
                    <div className="w-[160px]">
                      <img src={movie.imageLink} className="rounded-[8px]" />
                      <p className="font-bold text-[14px]">{movie.title}</p>
                      <p className="text-[12px] text-gray-500">{movie.director}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-[#f1f6f4] p-[32px] rounded-[12px] text-center">
                <h3 className="font-bold">Save your favorite movies!</h3>
                <p>When you save a movie, it will appear here.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col pt-[40px] pb-[40px] items-start max-w-[1400px] w-full h-full justify-between py-0 px-[32px] my-0 mx-auto">
            <h1 className="text-[24px] font-bold mb-[8px]">Saved Movies</h1>
            <h2 className="text-[18px] font-light text-[rgba(64,70,84,.7)] pb-[16px] mb-[32px] border-b-2 border-solid border-[#f1f3f4] w-full">
              0 Movies
            </h2>
            <div className="w-full flex justify-start">
              <div className="max-w-[460px] flex flex-col items-center my-0 mx-auto">
                <Image
                  src={logIn}
                  alt=""
                  width={460}
                  height={264}
                  loading="lazy"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <p className="text-[24px] font-bold text-center mb-[16px]">
                  Sign in to see your favourited movies
                </p>
                <button
                  className="bg-[#320580] text-white h-[44px] rounded-[8px] text-[16px] transition-colors duration-200 flex items-center justify-center border-none w-[180px]"
                  onClick={() => dispatch(openLoginModal())}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <LogInModal redirectTo="/favorites" />
    </div>
  )
}

export default Favorites