// interfaces
import { IMovieCard } from "../../interfaces/MovieDetails"
// styles
import './MovieCard.css'
// icons
import { FaStar } from "react-icons/fa"
// react-router
import { Link } from "react-router-dom"

const imageUrl = import.meta.env.VITE_IMG

type Props = {
    movie: IMovieCard;
    showLink: boolean;
}

const MovieCard = ({ movie, showLink = true }: Props) => {
  return (
    <div className="movie-card">
        {movie.poster_path && <img src={imageUrl + movie.poster_path} alt={movie.title} />}
        <h2>{movie.title}</h2>
        <p>
            <FaStar/> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard