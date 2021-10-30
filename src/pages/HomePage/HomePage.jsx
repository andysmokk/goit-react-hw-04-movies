import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import moviesAPI from '../../services/moviesApi';

export function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(movies => setMovies(movies.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: {
                      location,
                      label: 'GO HOME PAGE',
                    },
                  },
                }}
              >
                {movie.title}{' '}
                {movie.release_date
                  ? `(${movie.release_date.substring(0, 4)})`
                  : movie.release_date}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
