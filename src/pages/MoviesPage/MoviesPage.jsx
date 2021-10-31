import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import s from './MoviesPage.module.css';
import moviesAPI from '../../services/moviesApi';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  console.log(history);
  console.log(location);

  const getQuery = new URLSearchParams(location.search).get('query');
  console.log(getQuery);
  console.log(location.search);

  useEffect(() => {
    if (!getQuery) {
      return;
    }

    moviesAPI
      .fetchMovie(getQuery)
      .then(movies => setMovies(movies.results))
      .catch(error => console.log(error));
  }, [getQuery]);

  const onSubmitForm = e => {
    e.preventDefault();

    if (!e.target[0].value) {
      return;
    }

    setMovieName(e.target[0].value);

    history.push({
      ...location,
      search: `query=${e.target[0].value}`,
    });

    moviesAPI
      .fetchMovie(e.target[0].value)
      .then(movies => setMovies(movies.results))
      .catch(error => console.log(error))
      .finally((e.target[0].value = ''));
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={s.button}>
          <span>Search</span>
        </button>
      </form>
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
                      label: 'GO MOVIES PAGE',
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
