import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const maxRecipes = 12;
const maxCategory = 5;
const messageError = 'Sorry, we haven\'t found any recipes for these filters.';

function RecipesProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [apiFilter, setApiFilter] = useState();
  const [detail, setDetail] = useState();
  const [category, setCategory] = useState();
  const [email, setEmail] = useState('');

  const foodAPICategory = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const { meals } = await fetch(url)
      .then((response) => response.json());
    setCategory(meals.slice(0, maxCategory));
  }, []);

  // requisição FOOD primeiro render
  const fullFoodAPI = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const { meals } = await fetch(url)
      .then((response) => response.json());
    setData(meals.slice(0, maxRecipes));
  };

  // requisicao com filtro FOOD
  const foodAPI = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/';
    const { meals } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    if (meals === null) {
      global.alert(messageError);
    } else {
      setData(meals.slice(0, maxRecipes));
    }
  }, [searchFilter]);

  // requisição DRINK primeiro render
  const fullDrinkAPI = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const { drinks } = await fetch(url)
      .then((response) => response.json());
    setData(drinks.slice(0, maxRecipes));
  };

  // requisicao com filtro DRINK
  const drinkAPI = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/';
    const { drinks } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    if (drinks === null) {
      global.alert(messageError);
    } else {
      setData(drinks.slice(0, maxRecipes));
    }
  }, [searchFilter]);

  useEffect(() => {
    if (searchFilter) {
      if (apiFilter === 'Foods') {
        foodAPI();
      } else if (apiFilter === 'Drinks') {
        drinkAPI();
      }
    } else {
      if (apiFilter === 'Foods') {
        fullFoodAPI();
        foodAPICategory();
      } else if (apiFilter === 'Drinks') {
        fullDrinkAPI();
      }
      console.log(`estamos na pagina ${apiFilter}`);
    }
  }, [apiFilter, searchFilter, foodAPI, drinkAPI, foodAPICategory]);

  const contextValue = {
    data,
    setData,
    email,
    setEmail,
    searchFilter,
    setSearchFilter,
    apiFilter,
    setApiFilter,
    detail,
    setDetail,
    category,
    setCategory,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
