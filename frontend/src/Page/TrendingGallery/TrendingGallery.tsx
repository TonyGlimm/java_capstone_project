import React from "react";
import './TrendingGallery.css';
import { Movie } from "../../models/Movie";
import TrendingCard from "../../components/TrendingCard/TrendingCard";

type MovieGalleryProps = {
    movies: Movie[]
}

function MovieGallery(props: MovieGalleryProps) {
    return (
        <>
            <div className="gallery--body">
                {props.movies.map((movie) => (
                    <TrendingCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </>
    )
}
export default MovieGallery