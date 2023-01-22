import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

import css from './Search.module.css';
import { API_KEY } from 'constants/API_KEY';

const StyledLink = styled(Link)`
  color: darkblue;

  font-size: 20px;
  font-weight: 500;

  :hover {
    color: orangered;
  }
  transition-duration: 250ms;
`;

export function Search() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get('query') ?? '';
  const [search, setSearch] = useState(searchQuery);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: search });
  };

  const handleChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  useEffect(() => {
    if (searchQuery === '') return;
    const fetchMoviesByKeyword = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
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
    fetchMoviesByKeyword();
  }, [searchQuery]);

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="search"
          value={search}
          type="text"
          onChange={handleChange}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      {search && (
        <ul className={css.movieList}>
          {movies.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
