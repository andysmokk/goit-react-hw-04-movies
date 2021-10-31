import { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useParams } from 'react-router';
import {
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import moviesAPI from '../../services/moviesApi';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast_page" */),
);
const Reviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews' /* webpackChunkName: "reviews_page" */
  ),
);

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsPage() {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI.fetchMovieDetail(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  const onClickGoBack = () => {
    history.push(location?.state?.from?.location ?? '/');
    // history.goBack();
  };

  return (
    <>
      <button type="submit" onClick={onClickGoBack} className={s.button}>
        {location?.state?.from?.label ?? 'GO BACK'}
      </button>
      {movie && (
        <div className={s.box}>
          <img
            src={`${BASE_IMG_URL}${movie.poster_path}`}
            alt=""
            className={s.img}
          />
          <div className={s.description}>
            <h1 className={s.title}>
              {movie.title}{' '}
              {movie.release_date
                ? `(${movie.release_date.substring(0, 4)})`
                : movie.release_date}
            </h1>
            <p className={s.text}>User Score: {movie.vote_average}</p>
            <h2 className={s.title}>Overview</h2>
            <p className={`${s.overview} + ${s.text}`}>{movie.overview}</p>
            <h2 className={s.title}>Genres</h2>
            <div>
              <ul className={`${s.list} + ${s.text}`}>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional information</h2>
        <ul className={`${s.list} + ${s.text}`}>
          <li>
            <NavLink
              className={s.pages}
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: { location, label: 'GO BACK' },
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.pages}
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: { location, label: 'GO BACK' },
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path={`${match.path}/cast`}>
            <Cast movieId={movieId} />
          </Route>

          <Route path={`${match.path}/reviews`}>
            <Reviews movieId={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
