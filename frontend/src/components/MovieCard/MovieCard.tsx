import React from "react";

import './MovieCard.css'
import {Movie} from "../../models/Movie";

type MovieCardProps = {
    movie: Movie


}



function MovieCard(props: MovieCardProps) {

    let poster_path = `https://image.tmdb.org/t/p/w342${props.movie.poster_path}`
    if (props.movie.poster_path == null) {
        poster_path = "https://i.imgur.com/wjVuAGb.png"
    }
        return (
            <div className="gallery__card" id={props.movie.id.toString()}>
                <h2 className="gallery__card--title">{props.movie.original_title}</h2>

                <img className="glimm-image" title={props.movie.original_title} src={poster_path}
                     alt={props.movie.original_title}/>

            </div>
        )

}
export default MovieCard;