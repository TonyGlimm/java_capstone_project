package com.github.tonyglimm.movie_tmdb;

import java.util.List;

public record MovieResponse(List<Movie> results) {
}