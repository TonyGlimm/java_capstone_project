import axios from 'axios'
import {useEffect, useState} from "react";
import {Movie} from "../../models/Movie";

function useMoviesApi(apiUrl: string) {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchMovies()
    }, [])

    function fetchMovies() {
        setLoading(true)
        axios
            .get(apiUrl)
            .then((response) => response.data)
            .then((incomingMovies) => {
                setMovies(incomingMovies)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => setLoading(false))
    }

    return { movies}
}
export default useMoviesApi