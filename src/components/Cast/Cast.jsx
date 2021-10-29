// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import moviesAPI from '../../services/moviesApi';

const BASE_IMG_URL_CAST = 'https://image.tmdb.org/t/p/w300';

function Cast({ movieId }) {
  //   const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  console.log(casts);

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

export default Cast;
