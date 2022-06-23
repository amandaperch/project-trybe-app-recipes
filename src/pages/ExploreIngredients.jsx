import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientCard from '../components/IngredientCard';

const MEALS_INGREDIENTS_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINKS_INGREDIENTS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const TWELVE = 12;

function ExploreIngredients() {
  const [ingredients, setIngredients] = useState();
  const history = useHistory();

  const getMealIngredients = async () => {
    const response = await fetch(MEALS_INGREDIENTS_URL);
    const { meals } = await response.json();
    setIngredients(meals.filter((_, index) => index < TWELVE));
  };

  const getDrinksIngredients = async () => {
    const response = await fetch(DRINKS_INGREDIENTS_URL);
    const { drinks } = await response.json();
    setIngredients(drinks.filter((_, index) => index < TWELVE));
  };

  useEffect(() => {
    if (history.location.pathname.includes('foods')) {
      getMealIngredients();
    }
    if (history.location.pathname.includes('drinks')) {
      getDrinksIngredients();
    }
  }, [history]);

  return (
    <div>
      <Header pageTitle="Explore Ingredients" />
      {!ingredients ? <p>loading</p> : (
        ingredients.map((ingredient, index) => (
          <Link
            to="/foods"
            key={ index }
          >
            <IngredientCard
              infoIngredient={ ingredient }
              index={ index }
            />
          </Link>
        ))
      )}
      <Footer />
    </div>
  );
}

export default ExploreIngredients;
