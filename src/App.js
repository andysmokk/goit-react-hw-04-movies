// import './App.css';
import { Route, Switch } from 'react-router';
import Navigation from './components/Navigation/Navigation.jsx';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <>
      <Navigation />
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
    </>
  );
}

export default App;
