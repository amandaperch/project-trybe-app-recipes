import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
    >
      <Link to="./drinks">
        <button
          type="button"
          data-testid="drinks-bottom-btn"
        >
          <img
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="drink-icon"
          />
        </button>
      </Link>

      <Link to="./explore">
        <button
          type="button"
          data-testid="explore-bottom-btn"
          value="search-top-btn"

        >
          <img
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="explore-icon"
          />
        </button>
      </Link>

      <Link to="./food">
        <button
          type="button"
          data-testid="food-bottom-btn"
          value="search-top-btn"

        >
          <img
            data-testid="food-bottom-btn"
            src={ mealIcon }
            alt="food-icon"
          />
        </button>
      </Link>

    </footer>
  );
}

export default Footer;
