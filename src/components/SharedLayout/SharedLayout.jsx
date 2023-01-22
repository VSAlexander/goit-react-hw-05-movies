import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './SharedLayout.module.css';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;

  font-size: 22px;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;

export function SharedLayout() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navMenu}>
          <Link to="" className={css.link}>
            Home
          </Link>
          <Link to="movies" className={css.link}>
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
