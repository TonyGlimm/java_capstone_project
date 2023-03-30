import axios from 'axios';
import {useCallback, useEffect, useState} from "react";
import {Movie} from "../../models/Movie";

function useMoviesApi(apiUrl: string, page: number) {
    const [movies, setMovies] = useState<Movie[]>([])

    const fetchMovies = useCallback(() => {
        axios
            .get(apiUrl+page)
            .then((response) => response.data)
            .then((incomingMovies) => {
                setMovies(incomingMovies)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [apiUrl, page])

    useEffect(() => {
        fetchMovies()
    } , [fetchMovies])

    return { movies }
}

export default useMoviesApi