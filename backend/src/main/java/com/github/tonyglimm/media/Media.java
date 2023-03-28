package com.github.tonyglimm.media;
import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;


import java.util.List;

public record Media(
        int id,
        @JsonAlias({"original_name", "original_title"}) String originalTitle,
        @JsonAlias("genre_ids") List<Integer> genreIds,
       @JsonAlias("poster_path") String posterPath,
       @JsonAlias({"first_air_date", "release_date"}) String releaseDate,
        @JsonAlias("media_type") String mediaType,
        @JsonAlias("vote_average") float voteAverage,
        @JsonAlias("vote_count")
        Integer voteCount,
        String overview) {
}

