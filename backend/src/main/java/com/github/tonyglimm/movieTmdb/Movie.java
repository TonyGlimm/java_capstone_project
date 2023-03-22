package com.github.tonyglimm.movieTmdb;
import java.util.List;

public record Movie(
        int id,
        String original_title,
        List<Integer> genre_ids,
        String poster_path,
        String release_date,
        float vote_average,
        int vote_count,
        String overview) {
}

