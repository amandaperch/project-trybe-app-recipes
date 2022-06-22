import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MEALS_INGREDIENTS_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINKS_INGREDIENTS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

function ExploreIngredients() {
  const [ingredients, setIngredients] = useState();
  const history = useHistory();

  const getMealIngredients = async () => {
    const response = await fetch(MEALS_INGREDIENTS_URL);
    const { meals } = await response.json();
    setIngredients(meals);
  };

  const getDrinksIngredients = async () => {
    const response = await fetch(DRINKS_INGREDIENTS_URL);
    const { drinks } = await response.json();
    setIngredients(drinks);
  };

  useEffect(() => {
    if (history.location.pathname.includes('foods')) {
      getMealIngredients();
    }
    getDrinksIngredients();
  }, [history]);

  return (
    <div>
      <Header pageTitle="Explore Ingredients" />
      blabla
      <Footer />
    </div>
  );
}

export default ExploreIngredients;
