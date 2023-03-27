import React from "react";

import './TrendingCard.css';

import {Movie} from "../../models/Movie";

type TrendingCardProps = {
    movie: Movie
}
function MovieCard(props: TrendingCardProps) {

    let poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.poster_path}`
    if (props.movie.poster_path == null) {
        poster_path = "https://i.imgur.com/wjVuAGb.png"
    }
    return (
        <div className="media">
            <img className="poster" title={props.movie.original_title} src={poster_path}
                 alt={props.movie.original_title}/>
            <h2 className="title">{props.movie.original_title}</h2>
            <span className="subTitle">{props.movie.media_type === "movie" ? "Movie" : "TV Series"}
            <span className='subTitle'>{props.movie.release_date}</span>
            </span>
        </div>
    )
}
export default MovieCard;