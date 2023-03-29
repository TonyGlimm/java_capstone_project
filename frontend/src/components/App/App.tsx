import React, {useEffect, useState} from 'react';
import './App.css';

import Header from "../Header/Header";
import MovieGallery from "../../Page/MovieGallery/MovieGallery";
import useMoviesApi from "../hooks/useMoviesApi";
import SimpleBottomNavigation from "../MainNav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TrendingGallery from "../../Page/TrendingGallery/TrendingGallery";

function App() {
    const [page, setPage] = useState(1);
    const [showGallery, setShowGallery] = useState(false);
    const {movies} = useMoviesApi("/api/movies/popular/",page);
    const {movies: trendingMedia} = useMoviesApi("/api/trending/", page);

    useEffect(() => {
        setShowGallery(true);
    }, [page]);

  return (
      <BrowserRouter>
        <Header/>
        <div className="app">
            <main className={"main"}>
                <Routes>
                    <Route path={"/"} element={showGallery&& <TrendingGallery movies={trendingMedia} page={page} setPage={setPage} />} />
                    <Route path={"/movies"} element={showGallery && <MovieGallery movies={movies} page={page} setPage={setPage}/>}/>
                </Routes>
            <SimpleBottomNavigation/>
            </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
