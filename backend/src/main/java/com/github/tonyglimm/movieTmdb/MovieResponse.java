package com.github.tonyglimm.movieTmdb;

import java.util.List;

public record MovieResponse(List<Movie> results) {
}