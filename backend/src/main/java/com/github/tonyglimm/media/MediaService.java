package com.github.tonyglimm.media;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Objects;

@Service
public class MediaService {

    private final WebClient webClient;
    private static final String API_KEY = System.getenv("TMDB_API_KEY");
    public MediaService(

            @Value("${tmdbApi.url}") String url
    ) {
        this.webClient = WebClient.create(url);
    }

    public List<Media> getPopularMovies() {
        return Objects.requireNonNull(webClient.get()
                .uri("/movie/popular?api_key=" + API_KEY + "&language=en-US&include_adult=false&page=1")
                .retrieve()
                .bodyToMono(MediaResponse.class)
                .block()).results();
    }


    public List<Media> getTrending() {
        return Objects.requireNonNull(webClient.get()
                .uri("/trending/all/day?api_key=" + API_KEY)
                .retrieve().bodyToMono(MediaResponse.class)
                .block()).results();
    }
}
