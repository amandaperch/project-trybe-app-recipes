import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  return (
    <>
      <div>
        <Header pageTitle="Profile" />
      </div>

      <h1 data-testid="profile-email">
        {email}
      </h1>

      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Done Recipes
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Favorite Recipes
      </button>

      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Logout
      </button>

      <Footer />

    </>
  );
}

export default Profile;
