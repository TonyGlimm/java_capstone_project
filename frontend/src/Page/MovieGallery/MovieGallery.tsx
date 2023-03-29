import React, {Dispatch, SetStateAction} from "react";
import './MovieGallery.css'
import { Movie } from "../../models/Movie";
import MovieCard from "../../components/MovieCard/MovieCard";
import CustomPagination from "../../components/Pagination/CustomPagination";

type MovieGalleryProps = {
    movies: Movie[],
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}
function MovieGallery(props: MovieGalleryProps) {
    return (
        <>
            <div className="gallery--body">
                {props.movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <CustomPagination setPage={props.setPage} numberOfPages={50}/>
        </>
    )
}
export default MovieGallery