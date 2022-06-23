import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <Link to="/drinks">
        <button
          type="button"
        >
          <img
            className="footer-icon"
            data-testid="drinks-bottom-btn"
            src={ drinkIcon }
            alt="drink-icon"
          />
        </button>
      </Link>

      <Link to="/explore">
        <button
          type="button"
        >
          <img
            className="footer-icon"
            data-testid="explore-bottom-btn"
            src={ exploreIcon }
            alt="explore-icon"
          />
        </button>
      </Link>

      <Link to="/foods">
        <button
          type="button"
        >
          <img
            className="footer-icon"
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
