import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const history = useHistory();
  const email = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <Header pageTitle="Profile" />

      <h1 data-testid="profile-email">
        {email
          ? (
            email.email
          ) : 'email@email' }
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

export default Profile;
