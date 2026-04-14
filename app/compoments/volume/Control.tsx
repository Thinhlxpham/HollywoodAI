"use client"

import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useAudioPlayer } from "../../context/AudioPlayerContext"



function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "00:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Control({ params }: { params: { id: string } }) {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    skipNext,
    skipPrevious,
    seek,
  } = useAudioPlayer();
  const { id } = params;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true)

  async function IndividualMovie() {
    if (!id) return;
    const response = await fetch(`https://advanced-internship-api-production.up.railway.app/movies/${id}`);
    const data = await response.json();
    const result = data.data;
    setMovie(result);
    setLoading(false);
  }

  useEffect(() => {
    IndividualMovie();
  }, [id]);

  


  return (
    <>
     
      <div className="flex gap-[12px] w-[calc(100% / 3)]">
        {currentTrack?.thumbnail || movie?.imageLink ? (
          <figure className="flex max-h-[48px] h-[48px] min-h-[48px] w-auto">
            <Image
              src={movie?.imageLink!}
              width={50}
              height={50}
              alt={movie?.id }
            />
          </figure>
        ) : (
          <div className="flex items-center justify-center bg-[#171a1f] w-[50px] h-[50px] rounded-[8px] text-[12px] text-white">
            No image
          </div>
        )}
        <div className="text-white text-[14px] flex flex-col gap-[4px] justify-center">
          <p>{movie?.title}</p>
          <p>{movie?.director}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-[12px] items-center justify-center">
          <button
            onClick={skipPrevious}
            className="rounded-[50%] cursor-pointer border-none bg-transparent"
            type="button"
          >
            <BackwardIcon className="w-[20px] h-[20px] transition-all duration-200 text-white" />
          </button>
          <button
            onClick={togglePlay}
            className="w-[40px] h-[40px] bg-white rounded-[50%] cursor-pointer border-none flex items-center justify-center"
            type="button"
          >
            {isPlaying ? (
              <PauseIcon className="text-black w-[20px] h-[20px] transition-all duration-200" />
            ) : (
              <PlayIcon className="text-black w-[20px] h-[20px] transition-all duration-200" />
            )}
          </button>
          <button
            onClick={skipNext}
            className="rounded-[50%] cursor-pointer border-none bg-transparent"
            type="button"
          >
            <ForwardIcon className="w-[20px] h-[20px] transition-all duration-200 text-white" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-[16px]">
        <span className="text-white text-[14px] w-[48px] text-right">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={(event) => seek(Number(event.target.value))}
          className="relative bg-[#ccc] w-full h-[2px] rounded-[2px] cursor-pointer"
        />
        <span className="text-white text-[14px] w-[48px] text-right">{formatTime(duration)}</span>

      </div>
    </>
  );
}
