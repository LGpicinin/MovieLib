export interface IMovieCard{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

export interface IMoviePage{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    tagline: string;
    overview: string;
    budget: number;
    revenue: number;
    runtime: number;
    release_date: string;
}