import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Header/Header";
import useMoviesApi from "../hooks/useMoviesApi";
import MovieGallery from "../../Page/MovieGallery/MovieGallery";
import TrendingGallery from "../../Page/TrendingGallery/TrendingGallery";
import TvGallery from "../../Page/TvGallery/TvGallery";
import SearchPage from "../../Page/Search/./SearchPage";
import SimpleBottomNavigation from "../MainNav";


function App() {
    const [page, setPage] = useState(1);
    const [showGallery, setShowGallery] = useState(false);
    const {movies} = useMoviesApi("/api/movies/popular/",page);
    const {movies: trendingMedia} = useMoviesApi("/api/trending/", page);
    const {movies: tvShows} = useMoviesApi("/api/tv/popular/", page);

    useEffect(() => {
        setShowGallery(true);
    }, []);

  return (
      <BrowserRouter>
        <Header/>
        <div className="app">
            <main className={"main"}>
                <Routes>
                    <Route path={"/"} element={showGallery&& <TrendingGallery movies={trendingMedia} page={page} setPage={setPage} />} />
                    <Route path={"/movies"} element={showGallery && <MovieGallery movies={movies} page={page} setPage={setPage}/>}/>
                    <Route path={"/tv"} element={showGallery && <TvGallery movies={tvShows} page={page} setPage={setPage}/> }/>
                    <Route path={"/search"} element={<SearchPage/>}/>
                </Routes>
            <SimpleBottomNavigation/>
            </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
