package com.github.tonyglimm.movie;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;


@Service

public class MovieService {
    private WebClient webClient = WebClient.create("https://api.themoviedb.org/3/movie/popular?api_key=!!!!KEY_HERE!!!!!!&language=en-US&page=1");

    public List<Movie> getPopularMovies() {

        MovieApiResponse movieApiResponse = Objects.requireNonNull(webClient.get()
                .uri("")
                .retrieve()
                .bodyToMono(MovieApiResponse.class)
                .block());

        return movieApiResponse.results();
    }
}

