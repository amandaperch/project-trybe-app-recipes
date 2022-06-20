import React from 'react';
import { Link } from 'react-router-dom';
import profIMG from '../images/profileIcon.svg';
import searchIMG from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <Link
        to="/"
      >
        <img
          data-testid="profile-top-btn"
          src={ profIMG }
          alt="profile-icon"
        />
      </Link>
      <p data-testid="page-title">
        {' '}

      </p>
      <button
        type="button"
        data-testid="search-top-btn"
        value="search-top-btn"
      >
        <img
          src={ searchIMG }
          alt="search-icon"
        />
      </button>
    </div>
  );
}

export default Header;
