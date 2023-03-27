package com.github.tonyglimm.media;
import com.fasterxml.jackson.annotation.JsonAlias;

import java.util.List;

public record Media(
        int id,
        @JsonAlias("original_name") String original_title,
        List<Integer> genre_ids,
        String poster_path,
        @JsonAlias("first_air_date") String release_date,
        String media_type,
        float vote_average,
        int vote_count,
        String overview) {
}

