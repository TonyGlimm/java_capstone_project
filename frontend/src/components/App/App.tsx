import React from 'react';
import './App.css';

import Header from "../Header/Header";
import MovieGallery from "../MovieGallery/MovieGallery";
import useMoviesApi from "../hooks/useMoviesApi";


function App() {
  const {loading, movies} = useMoviesApi();

  return (
      <>
        <Header/>
        <div className="app">
      <main className={"main"}>

      {!loading && <MovieGallery movies={movies}/>}
    </main>

    </div>
      </>
  );
}

export default App;
