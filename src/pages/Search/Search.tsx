// hooks
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
// components
import MovieCard from "../../components/MovieCard/MovieCard"
// urls
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
// interfaces
import { IMovieCard } from "../../interfaces/MovieDetails";
// styles
import './Search.css'



const Search = () => {

  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")

  const [movies, setMovies] = useState([])

  const getSearchMovies = async(url:string) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)

}

useEffect(() => {

    const url = `${searchURL}?${apiKey}&query=${query}`

    getSearchMovies(url)

}, [query])

  return (
    <div>
      <h2 className="title-search">Resultados para: <span id="query-param">{query}</span></h2>
      <div className="movie-container-search">
          {movies && movies.map((movie: IMovieCard) => (
              <MovieCard key={movie.id} movie={movie} showLink={true}/>
          ))}
      </div>
    </div>
  )
}

export default Search