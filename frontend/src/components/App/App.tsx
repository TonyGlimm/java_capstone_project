import React from 'react';
import './App.css';

import Header from "../Header/Header";
import MovieGallery from "../MovieGallery/MovieGallery";
import useMoviesApi from "../hooks/useMoviesApi";
import SimpleBottomNavigation from "../MainNav";
import {Container} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const {loading, movies} = useMoviesApi();

  return (
      <BrowserRouter>
        <Header/>
        <div className="app">
      <main className={"main"}>
{/*
      {!loading && <MovieGallery movies={movies}/>}
*/}
    </main>
                <Routes>
                    <Route path={"/"} />
                    <Route path={"/movies"} element={<MovieGallery movies={movies}/>}/>

                </Routes>
            <SimpleBottomNavigation/>
    </div>

      </BrowserRouter>
  );
}

export default App;
