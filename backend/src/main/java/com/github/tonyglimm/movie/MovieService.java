package com.github.tonyglimm.movie;
import com.github.tonyglimm.movieBing.MovieBing;
import com.github.tonyglimm.movieBing.MovieResponseBing;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;

@Service
public class MovieService {

    private final WebClient webClient;
    private static final String API_KEY = System.getenv("TMDB_API_KEY");
    public MovieService(
            @Value("${tmdbApi.url}") String url
    ) {
        this.webClient = WebClient.create(url);
    }


    public List<MovieBing> getPopularMovies() {
        return Objects.requireNonNull(webClient.get()
                .uri("/movie/popular?api_key=" + API_KEY + "&language=en-US&include_adult=false&page=1")
                .retrieve()
                .bodyToMono(MovieResponseBing.class)
                .block()).results();
    }
}

