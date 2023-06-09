package com.github.tonyglimm.media;

import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import java.io.IOException;

import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ApiIntegrationTest {
    private static final String JSON_RESPONSE = """
        {
            "results": [{
            "id":1,
            "originalTitle":"Tony Glimm",
            "genreIds":[1,2,3],
            "posterPath":"Poster",
            "releaseDate":"yesterday",
            "voteAverage":2.0,
            "voteCount":222222222,
            "overview":"this movie has a nice description"}]
        }
        """;

    @Autowired
    MockMvc mockMvc;
    private static MockWebServer mockWebServer;
    @BeforeAll
    static void beforeAll() throws Exception {
        mockWebServer = new MockWebServer();
        mockWebServer.start();
    }
    @BeforeEach
    public void reset() {
        MockResponse mockResponse = new MockResponse()
                .setHeader("Content-Type", "application/json")
                .setBody(JSON_RESPONSE);
        mockWebServer.enqueue(mockResponse);
    }
    @DynamicPropertySource
    static void backendProperties(DynamicPropertyRegistry registry) {
        registry.add("tmdbApi.url", () -> mockWebServer.url("/").toString());
    }

    @ParameterizedTest
    @ValueSource(strings = {"/api/movies/popular/1", "/api/trending/1", "/api/tv/popular/1" })
    void apiIntegrationTest(String url) throws Exception {
        mockMvc.perform(get(url))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].originalTitle").value("Tony Glimm"))
                .andExpect(jsonPath("$[0].posterPath").value("Poster"))
                .andExpect(jsonPath("$[0].genreIds",containsInAnyOrder(1,2,3)))
                .andExpect(jsonPath("$[0].releaseDate").value("yesterday"))
                .andExpect(jsonPath("$[0].voteAverage").value(2.0))
                .andExpect(jsonPath("$[0].voteCount").value(222222222))
                .andExpect(jsonPath("$[0].overview").value("this movie has a nice description"));
    }

    @AfterAll
    static void afterAll() throws IOException {
        mockWebServer.shutdown();
    }
}
