import React from "react";
import './MovieGallery.css'
import { Movie } from "../../models/Movie";
import MovieCard from "../MovieCard/MovieCard";

type MovieGalleryProps = {
    movies: Movie[]
}


function MovieGallery(props: MovieGalleryProps) {
    return (
        <>
            <h1 className="gallery--title">Movie Gallery</h1>
            <div className="gallery--body">
                {props.movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </>
    )
}

export default MovieGallery