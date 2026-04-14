"use client"

import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState, ChangeEvent } from "react";

function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "00:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function Control({ params }: { params: { id: string } }) {
  const { id } = params;
  const [movie, setMovie] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  async function IndividualMovie() {
    if (!id) return;
    const response = await fetch(`https://advanced-internship-api-production.up.railway.app/movies/${id}`);
    const data = await response.json();
    const result = data.data;
    setMovie(result);
  }

  useEffect(() => {
    IndividualMovie();
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setCurrentTime(audio.currentTime || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [movie?.summary]);

  const handlePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio playback error:", error);
    }
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  };

  


  return (
    <>
      {movie?.summary && (
        <audio ref={audioRef} src={movie.summary} preload="metadata" />
      )}
      <div className="flex gap-[12px] w-[calc(100% / 3)]">
        {movie?.imageLink ? (
          <figure className="flex max-h-[48px] h-[48px] min-h-[48px] w-auto">
            <Image
              src={movie.imageLink}
              width={50}
              height={50}
              alt={movie?.id || "cover"}
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
            className="rounded-[50%] cursor-pointer border-none bg-transparent"
            type="button"
          >
            <BackwardIcon className="w-[20px] h-[20px] transition-all duration-200 text-white" />
          </button>
          <button
            onClick={handlePlay}
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
          step={0.1}
          value={currentTime}
          onChange={handleSeek}
          className="relative bg-[#ccc] w-full h-[2px] rounded-[2px] cursor-pointer"
        />
        <span className="text-white text-[14px] w-[48px] text-right">{formatTime(duration)}</span>

      </div>
    </>
  );
}
