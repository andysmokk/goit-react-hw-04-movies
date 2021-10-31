import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moviesAPI from '../../services/moviesApi';

const BASE_IMG_URL_CAST = 'https://image.tmdb.org/t/p/w300';

export default function Cast({ movieId }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  console.log(movieId);

  return casts.length !== 0 ? (
    <ul>
      {casts &&
        casts.map(cast => (
          <li key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`${BASE_IMG_URL_CAST}${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="default_img"
                width="300"
              />
            )}
            <p>Character: {cast.character}</p>
            <p>{cast.name}</p>
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
