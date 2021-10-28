import { useState } from 'react';
import s from './MoviesPage.module.css';

export function MoviesPage() {
  const [movieName, setMovieName] = useState('');
  return (
    <>
      <form className={s.form} onSubmit>
        <button type="submit" className>
          <span className>Search</span>
        </button>

        <input
          name=""
          value={movieName}
          className
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange
        />
      </form>
    </>
  );
}
