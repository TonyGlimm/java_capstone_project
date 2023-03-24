import React from 'react';
import './App.css';

import MovieGallery from "../MovieGallery/MovieGallery";
import useMoviesApi from "../hooks/useMoviesApi";


function App() {
  const {loading, movies} = useMoviesApi();

  return (
    <div className="App">
    <main className={"main"}>
      {!loading && <MovieGallery movies={movies}/>}
    </main>
    </div>
  );
}

export default App;
