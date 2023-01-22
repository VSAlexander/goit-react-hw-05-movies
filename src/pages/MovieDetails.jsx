import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import { MovieCard } from 'components/MovieCard/MovieCard';

import { API_KEY } from 'constants/API_KEY';

const StyledBox = styled.div`
  padding: 10px;
  border-top: groove;
  border-bottom: groove;
`;

const StyledLink = styled(Link)`
  color: black;

  font-size: 20px;
  font-weight: 500;

  :hover {
    color: orangered;
  }
  transition-duration: 250ms;
`;

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <main>
      <Link
        to={location.state?.from ?? '/movies'}
        style={{
          display: 'block',
          width: '80px',
          marginLeft: '10px',
          marginTop: '10px',
          padding: '10px',

          backgroundColor: '#e2e2e2',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        ← Go back
      </Link>
      <MovieCard movie={movie} />
      <StyledBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: location.state?.from }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </StyledBox>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
}

export default MovieDetails;
