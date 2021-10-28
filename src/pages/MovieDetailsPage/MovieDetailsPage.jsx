import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import moviesAPI from '../../services/moviesApi';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieDetail(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  console.log(movie);

  return (
    <>
      {movie && (
        <div>
          <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt="" />
          <div>
            <h1>{`${movie.title} (${movie.release_date.substring(0, 4)})`}</h1>
            <p>User Score: {movie.vote_average}</p>
            <h2>Overwiew</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <div>
              {movie.genres &&
                movie.genres.map(genre => (
                  <ul key={genre.id}>
                    <li>{genre.name}</li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
