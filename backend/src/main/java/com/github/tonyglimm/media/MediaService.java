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
    private static final String REQUEST_STRING = "&language=en-US&include_adult=false&page=";

    public MediaService(

            @Value("${tmdbApi.url}") String url
    ) {
        this.webClient = WebClient.create(url);
    }

    public List<Media> getPopularMovies(int pageValue) {
        return Objects.requireNonNull(webClient.get()
                .uri("/movie/popular?api_key=" + API_KEY + REQUEST_STRING +pageValue)
                .retrieve()
                .bodyToMono(MediaResponse.class)
                .block()).results();
    }

    public List<Media> getTrending(int pageValue) {
        return Objects.requireNonNull(webClient.get()
                .uri("/trending/all/day?api_key=" + API_KEY + REQUEST_STRING +pageValue)
                .retrieve().bodyToMono(MediaResponse.class)
                .block()).results();
    }

    public List<Media> getPopularTv(int pageValue) {
        return Objects.requireNonNull(webClient.get()
                .uri("/tv/popular?api_key=" + API_KEY + REQUEST_STRING +pageValue)
                .retrieve().bodyToMono(MediaResponse.class)
                .block()).results();
    }

    public List<Media> search (String mediaType ,String searchTerm, int pageValue){
        return Objects.requireNonNull(webClient.get()
                .uri("/search/"+ mediaType + "?api_key=" + API_KEY + REQUEST_STRING
                        + "&query=" + searchTerm +"&page=" + pageValue)
                .retrieve().bodyToMono(MediaResponse.class)
                .block()).results();
    }
}
