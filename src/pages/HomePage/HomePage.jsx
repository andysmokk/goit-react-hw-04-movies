import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesAPI from '../../services/moviesApi';

export function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(movies => setMovies(movies.results));
  }, []);

  console.log(movies);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{`${
                movie.title
              } (${movie.release_date.substring(0, 4)})`}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
