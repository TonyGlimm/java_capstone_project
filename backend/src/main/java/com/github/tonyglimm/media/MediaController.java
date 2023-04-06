package com.github.tonyglimm.media;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MediaController {
    private final MediaService mediaService;

    @GetMapping("/movies/popular/{pageValue}")
    public List<Media> getPopularMovies(@PathVariable("pageValue") int pageValue) {
        return mediaService.getPopularMovies(pageValue);
    }
    @GetMapping("/trending/{pageValue}")
    public List<Media> getTrending(@PathVariable("pageValue") int pageValue) {
        return mediaService.getTrending(pageValue);
    }

    @GetMapping("/tv/popular/{pageValue}")
    public List<Media> getPopularTv(@PathVariable("pageValue") int pageValue) {
        return mediaService.getPopularTv(pageValue);
    }

    @GetMapping("/search/{mediaType}/{searchTerm}/{pageValue}")
    public List<Media> search( @PathVariable("mediaType") String mediaType ,
                               @PathVariable("searchTerm") String searchTerm
                               ,@PathVariable("pageValue") int pageValue) {
        return mediaService.search(mediaType ,searchTerm, pageValue);
    }
}