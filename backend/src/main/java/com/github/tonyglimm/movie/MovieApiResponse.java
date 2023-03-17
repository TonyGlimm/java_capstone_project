package com.github.tonyglimm.movie;

import java.util.List;

public record MovieApiResponse(
        List<Movie> results) {
}



