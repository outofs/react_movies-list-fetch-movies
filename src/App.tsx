import { useState } from 'react';
import './App.scss';

import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import { Movie } from './types/Movie';

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (movie: Movie) => {
    const movieIsUnique = !movies.some(
      currentMovie => currentMovie.imdbId === movie.imdbId,
    );

    if (movieIsUnique) {
      setMovies(prevMovies => [...prevMovies, movie]);
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>

      <div className="sidebar">
        <FindMovie
          addMovie={addMovie}
        />
      </div>
    </div>
  );
};