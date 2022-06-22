import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

const MAX_ITEMS_PER_PAGE = 12;

function RecipesProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [apiFilter, setApiFilter] = useState();

  // requisicao com filtro FOOD
  const foodAPI = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/';
    const { meals } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(meals.splice(0, MAX_ITEMS_PER_PAGE));
  }, [searchFilter]);

  // requisicao com filtro DRINK
  const drinkAPI = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/';
    const { drinks } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(drinks.splice(0, MAX_ITEMS_PER_PAGE));
  }, [searchFilter]);

  useEffect(() => {
    if (searchFilter) {
      if (apiFilter === 'Foods') {
        foodAPI();
      } else if (apiFilter === 'Drinks') {
        drinkAPI();
      }
    } else {
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
