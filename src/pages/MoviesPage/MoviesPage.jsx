import { useState } from 'react';
import s from './MoviesPage.module.css';
// import moviesAPI from '../../services/moviesApi';

export function MoviesPage() {
  const [movieName, setMovieName] = useState('');

  // useEffect(() => {
  //   moviesAPI.fetchMovie(movieName).then(movie => setMovieName(movie));
  // }, []);

  console.log(movieName);

  const onSubmitForm = e => {
    e.preventDefault();
  };

  const onChangeMovieName = ({ target }) => {
    setMovieName(target.value);
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          name="movieName"
          value={movieName}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={onChangeMovieName}
        />
      </form>
    </>
  );
}
