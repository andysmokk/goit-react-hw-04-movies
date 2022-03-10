import { useState, useEffect } from 'react';
import s from './Cast.module.css';
import PropTypes from 'prop-types';
import moviesAPI from '../../services/moviesApi';

const BASE_IMG_URL_CAST = 'https://image.tmdb.org/t/p/w300';
const DEFAULT_IMG =
  'https://cdn.pixabay.com/photo/2014/04/02/10/22/buddy-303604_960_720.png';

export default function Cast({ movieId }) {
  const [casts, setCasts] = useState([]);

  console.log('🚀 ~ file: Cast.jsx ~ line 10 ~ Cast ~ casts', casts);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return casts.length !== 0 ? (
    <ul className={s.list}>
      {casts &&
        casts.map(cast => (
          <li key={cast.id} className={s.item}>
            {cast.profile_path ? (
              <img
                src={`${BASE_IMG_URL_CAST}${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <img src={`${DEFAULT_IMG}`} alt="default_img" width="300" />
            )}
            <p className={s.text}>Character: {cast.character}</p>
            <p className={s.text}>{cast.name}</p>
          </li>
        ))}
    </ul>
  ) : (
    <p>No information</p>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
