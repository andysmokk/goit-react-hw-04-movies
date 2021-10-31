import { useState, useEffect } from 'react';
import s from './Reviews.module.css';
import PropTypes from 'prop-types';
import moviesAPI from '../../services/moviesApi';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  console.log(reviews.length);
  console.log(movieId);

  return reviews.length !== 0 ? (
    <ul className={s.list}>
      {reviews &&
        reviews.map(review => (
          <li key={review.id}>
            <p className={s.author}>{review.author}</p>
            <p className={s.content}>{review.content}</p>
            <hr />
          </li>
        ))}
    </ul>
  ) : (
    <p className={s.text}>We don't have any reviews for this movie</p>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
