import React from "react";
import "../MovieCard/MovieCard.css";

import {Movie} from "../../models/Movie";
import {Badge} from "@mui/material";
import DetailsModal from "../DetailsModal/DetailsModal";

type TrendingCardProps = {
    movie: Movie
}
function MovieCard(props: TrendingCardProps) {

    let poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face${props.movie.posterPath}`
    if (props.movie.posterPath == null) {
        poster_path = "https://i.imgur.com/wjVuAGb.png"
    }
    return (
        <DetailsModal movie={props.movie}>
            <Badge badgeContent={props.movie.voteAverage} color={props.movie.voteAverage >7? "primary":"secondary"}/>
            <img className="poster" title={props.movie.originalTitle} src={poster_path}
                 alt={props.movie.originalTitle}/>
            <h2 className="title">{props.movie.originalTitle}</h2>
            <span className="subTitle">{props.movie.mediaType === "movie" ? "Movie" : "TV Series"}
            <span className='subTitle'>{props.movie.releaseDate}</span>
            </span>
        </DetailsModal>
    )
}
export default MovieCard;