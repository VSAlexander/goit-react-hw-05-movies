import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import css from './TrendingMovies.module.css';
import { API_KEY } from 'constants/API_KEY';
// import { MovieList } from 'components/MovieList/MovieList';

const StyledLink = styled(Link)`
  color: darkblue;

  font-size: 20px;
  font-weight: 500;

  :hover {
    color: orangered;
  }
  transition-duration: 250ms;
`;

// const API_KEY = '2954afe7c35181c36bf30aa4bc9ce527';

export function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const fetchTrending = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      const data = response.data.results.map(({ id, title }) => ({
        id,
        title,
      }));
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
  // return <MovieList movies={movies} to={`movies/${movie.id}`} />;
}
