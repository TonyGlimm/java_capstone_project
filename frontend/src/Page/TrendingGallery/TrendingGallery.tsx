import React, {Dispatch, SetStateAction} from "react";
import './TrendingGallery.css';
import { Movie } from "../../models/Movie";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import CustomPagination from "../../components/Pagination/CustomPagination";

type TrendingGalleryProps = {
    movies: Movie[],
    page: number,
    setPage: Dispatch<SetStateAction<number>>


}
function TrendingGallery(props: TrendingGalleryProps) {
    return (
        <>
            <div className="gallery--body">
                {props.movies.map((movie) => (
                    <TrendingCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <CustomPagination setPage={props.setPage} numberOfPages={50}/>
        </>

    )
}
export default TrendingGallery