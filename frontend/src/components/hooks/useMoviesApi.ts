import axios from 'axios'
import {useEffect, useState} from "react";
import {Movie} from "../../models/Movie";

function useMoviesApi(apiUrl: string, page: number) {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        fetchMovies()
    } )

    function fetchMovies() {
        axios
            .get(apiUrl+page)
            .then((response) => response.data)
            .then((incomingMovies) => {
                setMovies(incomingMovies)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return { movies}
}
export default useMoviesApi