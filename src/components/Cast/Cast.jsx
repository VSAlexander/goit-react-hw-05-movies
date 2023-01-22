import { useParams } from 'react-router-dom';
import { API_KEY } from 'constants/API_KEY';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

import css from './Cast.module.css';
import no_image from './no_image.jpg';

function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  // const onImageError = event => {
  //   event.target.src = no_image;
  // };

  return (
    <div className={css.cast_wrapper}>
      <ul className={css.actor_list}>
        {cast.length > 0 &&
          cast.map(actor => (
            <li key={actor.id} className={css.actor_wrapper}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : no_image
                }
                alt={actor.name}
                // onError={onImageError}
                width="185px"
              />
              <div>
                <p>
                  <b>Real name:</b> {actor.name}
                </p>
                <p>
                  <b>Character name:</b> {actor.character}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Cast;
