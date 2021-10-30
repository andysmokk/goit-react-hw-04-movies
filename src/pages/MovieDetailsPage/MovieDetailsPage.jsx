import { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import moviesAPI from '../../services/moviesApi';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieDetailsPage() {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  // console.log(history);
  // console.log(location);

  useEffect(() => {
    moviesAPI.fetchMovieDetail(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  // console.log(movie);

  const onClickGoBack = e => {
    history.push(location?.state?.from?.location ?? '/');
    // history.goBack();
  };

  return (
    <>
      <button type="submit" onClick={onClickGoBack}>
        {location?.state?.from?.label ?? 'GO BACK'}
      </button>
      {movie && (
        <div>
          <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt="" />
          <div>
            <h1>
              {movie.title}{' '}
              {movie.release_date
                ? `(${movie.release_date.substring(0, 4)})`
                : movie.release_date}
            </h1>
            <p>User Score: {movie.vote_average}</p>
            <h2>Overview</h2>
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
      <hr />
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: { location, label: 'GO BACK' },
                },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: { location, label: 'GO BACK' },
                },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <Switch>
        <Route path={`${match.path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${match.path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
