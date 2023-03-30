import React, {Dispatch, SetStateAction} from "react";
import '../MovieGallery/MovieGallery.css'
import { Movie } from "../../models/Movie";
import CustomPagination from "../../components/Pagination/CustomPagination";
import TvCard from "../../components/TvCard/TvCard";

type TvGalleryProps = {
    movies: Movie[],
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}
function TvGallery(props: TvGalleryProps) {
    return (
        <>
            <div className="gallery--body">
                {props.movies.map((movie) => (
                    <TvCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <CustomPagination setPage={props.setPage} numberOfPages={50}/>
        </>
    )
}
export default TvGallery