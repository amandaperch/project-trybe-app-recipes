import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import profIMG from '../images/profileIcon.svg';
import searchIMG from '../images/searchIcon.svg';

function Header() {
  const [searchStatus, setSearchStatus] = useState(false);
  return (
    <div>
      <Link
        to="/profile"
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
        onClick={ () => setSearchStatus(!searchStatus) }
      >
        <img
          src={ searchIMG }
          alt="search-icon"
        />
      </button>
      { searchStatus
        ? (<input data-testid="search-input" placeholder="busca" />) : null}

    </div>
  );
}

export default Header;
