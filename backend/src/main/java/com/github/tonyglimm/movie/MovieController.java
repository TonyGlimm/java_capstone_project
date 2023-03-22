package com.github.tonyglimm.movie;

import com.github.tonyglimm.movieBing.MovieBing;
import com.github.tonyglimm.movieBing.MovieServiceBingDaniel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {
    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies/popular")
    public List<MovieBing> getPopularMovies() {
        return movieService.getPopularMovies();
    }
}

