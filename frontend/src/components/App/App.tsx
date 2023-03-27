import React, {useEffect, useState} from 'react';
import './App.css';

import Header from "../Header/Header";
import MovieGallery from "../../Page/MovieGallery/MovieGallery";
import useMoviesApi from "../hooks/useMoviesApi";
import SimpleBottomNavigation from "../MainNav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TrendingGallery from "../../Page/TrendingGallery/TrendingGallery";

function App() {
    const [showGallery, setShowGallery] = useState(false);
  const {movies} = useMoviesApi("/api/movies/popular");
    const {movies: movies2} = useMoviesApi("/api/trending");

    useEffect(() => {
        setShowGallery(true);
    }, []);

  return (
      <BrowserRouter>
        <Header/>
        <div className="app">
      <main className={"main"}>

    </main>
                <Routes>
                    <Route path={"/"} element={showGallery&& <TrendingGallery movies={movies2}/>} />
                    <Route path={"/movies"} element={showGallery && <MovieGallery movies={movies}/>}/>
                </Routes>
            <SimpleBottomNavigation/>
    </div>
      </BrowserRouter>
  );
}

export default App;
