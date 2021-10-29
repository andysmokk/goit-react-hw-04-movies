import { useState, useEffect } from 'react';
import moviesAPI from '../../services/moviesApi';

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  console.log(reviews);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
}

export default Reviews;
