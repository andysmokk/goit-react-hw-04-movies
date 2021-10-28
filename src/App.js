// import './App.css';
import { Route } from 'react-router';
import Navigation from './components/Navigation/Navigation.jsx';
import { HomePage } from './components/HomePage/HomePage';
import { MoviesPage } from './components/MoviesPage/MoviesPage';

function App() {
  return (
    <>
      <Navigation />

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/movies">
        <MoviesPage />
      </Route>
    </>
  );
}

export default App;
