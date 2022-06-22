import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import RecipesProvider from '../context/RecipesContext';

function Profile() {
  // const { email } = useContext(RecipesProvider);
  // const jsonEmail = JSON.stringify(email);
  const history = useHistory();

  const email = localStorage.getItem('user');

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <div>
        <Header pageTitle="Profile" />
      </div>

      <h1 data-testid="profile-email">
        {email}
      </h1>

      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>

      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>

      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleClick }
      >
        Logout
      </button>

      <Footer />

    </>
  );
}

Profile.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Profile;
