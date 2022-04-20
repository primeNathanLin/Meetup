import { Link } from "react-router-dom";
import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>My Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
