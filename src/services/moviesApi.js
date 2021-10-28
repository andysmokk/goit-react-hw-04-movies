const KEY = '80c40df4ca7e037eb588a248bc1cafa9';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchTrendingMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
    response => response.json(),
  );
}

function fetchMovie(query) {
  return fetch(
    `${BASE_URL}/search/movie?query=${query}&language=en-US&api_key=${KEY}`,
  ).then(response => response.json());
}

function fetchMovieDetail(id) {
  return fetch(`${BASE_URL}/movie/${id}?language=en-US&api_key=${KEY}`).then(
    response => response.json(),
  );
}

const api = {
  fetchTrendingMovies,
  fetchMovie,
  fetchMovieDetail,
};

export default api;
