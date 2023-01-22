import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

function getGenres(array) {
  return array.map(genre => genre.name).join(', ');
}
function convertIntoPercentage(number) {
  return number.toFixed(1) * 10 + '%';
}

export function MovieCard({ movie }) {
  return (
    <>
      <div className={css.wrapper}>
        <img
          src={
            movie.poster_path &&
            `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          }
          alt={`${movie.title}`}
          className={css.image}
        />
        <div className={css.movieInfo}>
          <h1>{movie.title}</h1>
          <p>
            User Score:{' '}
            {movie.vote_average && convertIntoPercentage(movie.vote_average)}
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres && getGenres(movie.genres)}</p>
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};
