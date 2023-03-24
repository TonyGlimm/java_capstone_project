import React from "react";

import './MovieCard.css'
import {Movie} from "../../models/Movie";

type MovieCardProps = {
    movie: Movie
}

function MovieCard(props: MovieCardProps) {
    return (
        <div className="gallery__card" id={props.movie.id.toString()}>
            <h2 className="gallery__card--title">{props.movie.original_title}</h2>
            <h3 className="gallery__card--date">{props.movie.release_date}</h3>
        </div>
    )
}

export default MovieCard;