// hooks
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// icons
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, BsCalendar } from "react-icons/bs"
// components
import MovieCard from "../../components/MovieCard/MovieCard"
// styles
import './Movie.css'
// urls
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
// intefaces
import { IMoviePage } from "../../interfaces/MovieDetails"



const Movie = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState<IMoviePage | undefined>()

  const getMovie = async(url:string) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)

  }

  const convertToDollar = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  }

  const convertDate = (date: string) => {

    const dateArray = date.split("-");

    const converted = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`

    return converted
  }

  useEffect(() => {
    const url = `${moviesURL}${id}?${apiKey}`
    getMovie(url)
  }, [])




  return (
    <div>
      {movie && (
        <div className="movie-page">
          <MovieCard movie={{id: movie.id, title: movie.title, poster_path: movie.poster_path, vote_average: movie.vote_average}} showLink={false}/>
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2/> Orçamento:
            </h3>
            <p>{convertToDollar(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp/> Receita:
            </h3>
            <p>{convertToDollar(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit/> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info">
            <h3>
              <BsCalendar/> Data de lançamento:
            </h3>
            <p>{convertDate(movie.release_date)}</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie