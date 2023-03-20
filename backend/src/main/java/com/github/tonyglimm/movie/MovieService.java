package com.github.tonyglimm.movie;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;


@Service

public class MovieService {
    public static final String API_KEY = System.getenv("TMDB_API_KEY");

    private WebClient webClient = WebClient.create("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=en-US&include_adult=false&page=1");
    public List<Movie> getPopularMovies() {
        MovieRepository movieRepository = Objects.requireNonNull(webClient.get()
                .uri("")
                .retrieve()
                .bodyToMono(MovieRepository.class)
                .block());

        return movieRepository.getResults();
    }
}
