import { useState } from 'react';
import { Link } from 'react-router-dom';
// import s from './MoviesPage.module.css';
import moviesAPI from '../../services/moviesApi';

export function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   if (!movieName) {
  //     return;
  //   }
  //   moviesAPI.fetchMovie(movieName).then(movies => setMovies(movies.results));
  // }, []);

  const onSubmitForm = e => {
    e.preventDefault();
    if (!movieName) {
      return;
    }
    moviesAPI.fetchMovie(movieName).then(movies => setMovies(movies.results));
  };

  const onChangeMovieName = ({ target }) => {
    setMovieName(target.value);
  };
  // console.log(movies);
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          name="movieName"
          value={movieName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={onChangeMovieName}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
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
