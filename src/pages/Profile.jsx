import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import '../CSS/ListRecipes.css';

function Profile() {
  const { setFavoriteRecipes } = useContext(RecipesContext);
  const history = useHistory();
  const email = JSON.parse(localStorage.getItem('user'));

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };

  const handleClickFavorite = () => {
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
  };

  return (
    <>
      <Header pageTitle="Profile" />
      <div className="detailsContainer">
        <h1 data-testid="profile-email" className="emailProfile">
          {email
            ? (
              email.email
            ) : 'email@email' }
        </h1>

        <div className="buttonContainer">

          <Link to="/done-recipes">
            <button
              type="button"
              data-testid="profile-done-btn"
              className="buttonCategory"
            >
              Done Recipes
            </button>
          </Link>

          <Link to="/favorite-recipes">
            <button
              type="button"
              data-testid="profile-favorite-btn"
              className="buttonCategory"
              onClick={ handleClickFavorite }
            >
              Favorite Recipes
            </button>
          </Link>

          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ handleClick }
            className="buttonCategory"
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Profile;
