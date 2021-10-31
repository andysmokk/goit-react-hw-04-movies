const KEY = '80c40df4ca7e037eb588a248bc1cafa9';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchTrendingMovies() {
  return fetchErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

function fetchMovie(query) {
  return fetchErrorHandling(
    `${BASE_URL}/search/movie?query=${query}&language=en-US&api_key=${KEY}`,
  );
}

function fetchMovieDetail(id) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${id}?language=en-US&api_key=${KEY}`,
  );
}

function fetchMovieCast(id) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${id}/credits?language=en-US&api_key=${KEY}`,
  );
}

async function fetchMovieReviews(id) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?language=en-US&api_key=${KEY}`,
  );
}

const api = {
  fetchTrendingMovies,
  fetchMovie,
  fetchMovieDetail,
  fetchMovieCast,
  fetchMovieReviews,
};

export default api;
