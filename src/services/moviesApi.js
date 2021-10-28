const KEY = '80c40df4ca7e037eb588a248bc1cafa9';
const BASE_URL = 'https://api.themoviedb.org/3';

function fetchTrendingMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`).then(
    response => response.json(),
  );
}

const api = {
  fetchTrendingMovies,
};

export default api;
