import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import { API_KEY } from 'constants/API_KEY';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div style={{ padding: '10px 20px' }}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <b>We have not received any reviews on the movie</b>
      )}
    </div>
  );
}

export default Reviews;
