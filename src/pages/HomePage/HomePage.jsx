import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './HomePage.module.css';
import moviesAPI from '../../services/moviesApi';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(movies => setMovies(movies.results));
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={s.item}>
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
