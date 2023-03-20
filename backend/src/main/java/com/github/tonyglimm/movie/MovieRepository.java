package com.github.tonyglimm.movie;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public class MovieRepository {
    List<Movie> results;

    public List<Movie> getResults() {
        return results;
    }
}



