import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [apiFilter, setApiFilter] = useState();
  const max = 12;

  // requisição FOOD primeiro render
  const fullFoodAPI = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const { meals } = await fetch(url)
      .then((response) => response.json());
    setData(meals.splice(0, max));
  };

  // requisicao com filtro FOOD
  const foodAPI = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/';
    const { meals } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(meals.splice(0, max));
  }, [searchFilter]);

  // requisição Drink primeiro render
  const fullDrinkAPI = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const { drinks } = await fetch(url)
      .then((response) => response.json());
    setData(drinks.splice(0, max));
  };

  // requisicao com filtro DRINK
  const drinkAPI = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/';
    const { drinks } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(drinks.splice(0, max));
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
        console.log('first render');
      } else if (apiFilter === 'Drinks') {
        fullDrinkAPI();
        console.log('first render');
      }
      console.log(`estamos na pagina ${apiFilter}`);
    }
  }, [apiFilter, searchFilter, foodAPI, drinkAPI]);

  const contextValue = {
    data,
    setData,
    searchFilter,
    setSearchFilter,
    apiFilter,
    setApiFilter,
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
