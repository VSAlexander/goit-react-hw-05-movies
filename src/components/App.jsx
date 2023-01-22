import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
// import Home from 'pages/Home';
const Home = lazy(() => import('pages/Home'));
// import Movies from 'pages/Movies';
const Movies = lazy(() => import('pages/Movies'));
// import MovieDetails from 'pages/MovieDetails';
const MovieDetails = lazy(() => import('pages/MovieDetails'));
// import Cast from './Cast/Cast';
const Cast = lazy(() => import('./Cast/Cast'));
// import Reviews from './Reviews/Reviews';
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
