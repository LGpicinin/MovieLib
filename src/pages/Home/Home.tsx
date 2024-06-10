// hooks
import { useState, useEffect } from "react"
// api
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
// interfaces
import { IMovieDetails } from "../../interfaces/MovieDetails";

type Props = {}

const Home = (props: Props) => {

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
            <h2>Filmes mais bem avaliados:</h2>
            {movies && movies.map((movie: IMovieDetails) => (
                <>
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Home