import './App.css';
import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home_page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies_page" */),
);
const NotFoundPage = lazy(() =>
  import(
    './pages/NotFoundPage/NotFoundPage' /* webpackChunkName: "not_found__page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies_details_page" */
  ),
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
