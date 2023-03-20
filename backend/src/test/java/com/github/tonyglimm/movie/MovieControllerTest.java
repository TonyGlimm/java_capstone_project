package com.github.tonyglimm.movie;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class MovieControllerTest {

    @Autowired
    MockMvc mockMvc;
    @Autowired
    MovieService movieService;
    @Autowired
    MovieRepository movieRepository;

    @Test
    void getPopularMovies() {

        class getPopularMoviesTest {
            void getPopularMovies_emptyArray() throws Exception {
                mockMvc.perform(MockMvcRequestBuilders.get("/movies/popular"))
                        .andExpect(status().isOk())
                        .andExpect(content().json("[]"));
            }
        }


    }
}