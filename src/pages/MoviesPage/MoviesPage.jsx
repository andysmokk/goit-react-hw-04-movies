import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import s from './MoviesPage.module.css';
import moviesAPI from '../../services/moviesApi';

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
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
    // console.log(e.target[0].value);
    setMovieName(e.target[0].value);

    history.push({
      ...location,
      search: `query=${e.target[0].value}`,
    });
    // if (!movieName) {
    //   return;
    // }
    moviesAPI
      .fetchMovie(e.target[0].value)
      .then(movies => setMovies(movies.results))
      .catch(error => console.log(error))
      .finally((e.target[0].value = ''));
  };

  // const reset = () => setMovieName('');
  console.log(movieName);
  // const onChangeMovieName = ({ target }) => {
  //   setMovieName(target.value);
  //   history.push({
  //     ...location,
  //     search: `query=${target.value}`,
  //   });
  // };
  // console.log(movies);
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          // name="movieName"
          // defaultValue={movieName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          // onChange={onChangeMovieName}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
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
