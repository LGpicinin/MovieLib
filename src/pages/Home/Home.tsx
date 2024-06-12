// hooks
import { useState, useEffect } from "react"
// api
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
// interfaces
import { IMovieCard } from "../../interfaces/MovieDetails";
// components
import MovieCard from "../../components/MovieCard/MovieCard";
// styles
import './Home.css'


const Home = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async(url:string) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)

    }

    useEffect(() => {

        const url = `${moviesURL}top_rated?${apiKey}`

        getMovies(url)

    }, [])


    return (
        <div>
            <h2 className="title">Filmes mais bem avaliados:</h2>
            <div className="movie-container">
                {movies && movies.map((movie: IMovieCard) => (
                    <MovieCard key={movie.id} movie={movie} showLink={true}/>
                ))}
            </div>
        </div>
    )
}

export default Home