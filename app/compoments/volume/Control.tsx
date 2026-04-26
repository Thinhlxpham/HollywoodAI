"use client";

import { useAudioPlayerContext } from "@/app/context/AudioPlayerContext";
import {
  BackwardIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useRef, useState, ChangeEvent } from "react";

function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "00:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

interface Movie {
  id: string;
  title: string;
  director?: string;
  imageLink?: string;
}

const AUDIO_BASE_URL =
  "https://advanced-internship-api-production.up.railway.app/";

export default function Control({ params }: { params: { id: string } }) {
  const { id } = params;
  const { currentTrack } = useAudioPlayerContext();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch movie info for the sidebar display
  useEffect(() => {
    if (!id) return;
    fetch(
      `https://advanced-internship-api-production.up.railway.app/movies/${id}`,
    )
      .then((r) => r.json())
      .then((data) => {
        const result = data.data;
        setMovie(result);

        // ✅ Auto-load audio from this movie's audioLink if no track is set via context
        if (!currentTrack && result?.audioLink && audioRef.current) {
          const url = `${AUDIO_BASE_URL}${result.audioLink}`;
          audioRef.current.src = url;
          audioRef.current.load();
        }
      });
  }, [id]);

  // When context track changes (e.g. user picks from a list), load that
  useEffect(() => {
    if (audioRef.current && currentTrack?.src) {
      audioRef.current.src = currentTrack.src;
      audioRef.current.load();
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, [currentTrack]);

  function togglePlay() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  }

  function handleTimeUpdate() {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  }

  function handleLoadedMetadata() {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  }

  function handleSeek(e: ChangeEvent<HTMLInputElement>) {
    if (!audioRef.current) return;
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  }

  return (
    <>
      {/* Track info */}
      <div className="flex gap-[12px] w-[calc(100%/3)]">
        {movie?.imageLink && (
          <figure className="flex max-h-[48px] h-[48px] min-h-[48px] w-auto">
            <Image
              src={movie.imageLink}
              width={50}
              height={50}
              alt={movie?.id}
            />
          </figure>
        )
        }
        <div className="text-white text-[14px] flex flex-col gap-[4px] justify-center">
          <p>{movie?.title}</p>
          <p>{movie?.director}</p>
        </div>
      </div>

      {/* Playback controls */}
      <div className="flex gap-[12px] items-center justify-center">
        <button
          className="rounded-[50%] cursor-pointer border-none bg-transparent"
          type="button"
          onClick={() => {
            if (!audioRef.current) return;
            audioRef.current.currentTime = Math.min(
              audioRef.current.currentTime - 5,
              duration,
            );
          }}
        >
          <BackwardIcon className="w-[20px] h-[20px] text-white" />
        </button>
        <button
          className="w-[40px] h-[40px] bg-white rounded-[50%] cursor-pointer border-none flex items-center justify-center"
          type="button"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <PauseIcon className="text-black w-[20px] h-[20px]" />
          ) : (
            <PlayIcon className="text-black w-[20px] h-[20px]" />
          )}
        </button>
        <button
          className="rounded-[50%] cursor-pointer border-none bg-transparent"
          type="button"
          onClick={() => {
            if (!audioRef.current) return;
            audioRef.current.currentTime = Math.min(
              audioRef.current.currentTime + 5,
              duration,
            );
          }}
        >
          <ForwardIcon className="w-[20px] h-[20px] text-white" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-[16px] w-[calc(100%/3)]">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onError={(e) => console.error("Audio error:", e)}
        />
        <span className="text-white text-[14px] w-[48px] text-right">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min={0}
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="relative bg-[#ccc] w-full h-[2px] rounded-[2px] cursor-pointer"
        />
        <span className="text-white text-[14px] w-[48px] text-right">
          {formatTime(duration)}
        </span>
      </div>
    </>
  );
}
