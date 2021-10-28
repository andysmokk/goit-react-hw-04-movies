import { useState, useEffect } from 'react';
import moviesAPI from '../../services/moviesApi';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(movies => setMovies(movies.results));
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li>
            <a href="/">{movie.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
