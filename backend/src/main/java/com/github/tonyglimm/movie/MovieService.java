package com.github.tonyglimm.movie;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;


@Service

public class MovieService {
    public static final String API_KEY = System.getenv("TMDB_API_KEY");
    String baseurl = "https://api.themoviedb.org/3/";
    private WebClient webClient = WebClient.create(baseurl);

    public List<Movie> getPopularMovies() {
        MovieRepository movieRepository = Objects.requireNonNull(webClient.get()
                .uri("movie/popular?api_key=" + API_KEY + "&language=en-US&include_adult=false&page=1")
                .retrieve()
                .bodyToMono(MovieRepository.class)
                .block());

        return movieRepository.getResults();
    }
}

