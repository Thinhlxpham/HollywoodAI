interface Movie {
  id: string
  title: string
  summary: string
  author?: string
  imageLink?: string
}

async function fetchMoviesList(): Promise<Movie[]>{
   const response = await fetch('https://advanced-internship-api-production.up.railway.app/selectedMovies')
  const data = await response.json()
  const results = data.data
  return results
}


 async function fetchTopMovies(): Promise<Movie[]>{
      const response = await fetch('https://advanced-internship-api-production.up.railway.app/topMovies')
      const data = await response.json()
      const results = data.data
      return results
    }


export async function getTracks() {
  const [movieList, topMovie] = await Promise.all([
    fetchMoviesList(),
    fetchTopMovies()
  ])

  const combineMovie = [...movieList, ...topMovie]

  return combineMovie.map((movie: Movie) => ({
    title: movie.title,
    src: movie.summary,
    author: movie.author,
    thumbnail: movie.imageLink || '',
  }))
}

export const tracks = getTracks()





