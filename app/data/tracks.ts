import { Track } from "../types/track";

interface Movie {
  id: string;
  title: string;
  director?: string;
  audioLink?: string;
  imageLink?: string;
}

const AUDIO_BASE_URL =
  "https://advanced-internship-api-production.up.railway.app";

async function fetchMoviesList(): Promise<Movie[]> {
  const response = await fetch(
    "https://advanced-internship-api-production.up.railway.app/selectedMovies",
  );
  const data = await response.json();
  return data.data;
}

async function fetchTopMovies(): Promise<Movie[]> {
  const response = await fetch(
    "https://advanced-internship-api-production.up.railway.app/topMovies",
  );
  const data = await response.json();
  return data.data;
}

export async function getTracks(): Promise<Track[]> {
  const [movieList, topMovies] = await Promise.all([
    fetchMoviesList(),
    fetchTopMovies(),
  ]);

  return [...movieList, ...topMovies].map((movie: Movie) => ({
    title: movie.title,
    src: movie.audioLink ? `${AUDIO_BASE_URL}/${movie.audioLink}` : "", // ← FIXED
    author: movie.director ?? "",
    thumbnail: movie.imageLink ?? "",
  }));
}
