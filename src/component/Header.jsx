import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profIMG from '../images/profileIcon.svg';
import searchIMG from '../images/searchIcon.svg';

function Header({ pageTitle, btnSearch }) {
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
      <h2 data-testid="page-title">
        {pageTitle}
      </h2>
      {btnSearch ? (
        <button
          type="button"
          value="search-top-btn"
          onClick={ () => setSearchStatus(!searchStatus) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIMG }
            alt="search-icon"
          />
        </button>
      ) : null }
      { searchStatus
        ? (
          <form>
            <input
              data-testid="search-input"
              placeholder="busca"
            />
            <label htmlFor="ingredient">
              <input
                data-testid="ingredient-search-radio"
                type="radio"
                name="filter"
                id="ingredient"
              />
              Ingredient
            </label>
            <label htmlFor="name">
              <input
                data-testid="name-search-radio"
                type="radio"
                name="filter"
                id="name"
              />
              Name
            </label>
            <label htmlFor="firstLetter">
              <input
                data-testid="first-letter-search-radio"
                type="radio"
                name="filter"
                id="firstLetter"
              />
              First Letter
            </label>
            <button
              type="submit"
              data-testid="exec-search-btn"
            >
              Search
            </button>
          </form>
        ) : null}

    </div>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string,
}.isRequired;

export default Header;
