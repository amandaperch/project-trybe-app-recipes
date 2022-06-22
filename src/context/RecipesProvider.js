import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [data, setData] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [apiFilter, setApiFilter] = useState();
  const [email, setEmail] = useState('');

  // requisição FOOD primeiro render
  // const foodAPI = async () => {
  //   const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  //   const { meals } = await fetch(url)
  //     .then((response) => response.json());
  //   setData(meals);
  //   console.log(data);
  // };

  // requisicao com filtro FOOD
  const foodAPI = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/';
    const { meals } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(meals);
  }, [searchFilter]);

  // requisicao com filtro DRINK
  const drinkAPI = useCallback(async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/';
    const { drinks } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(drinks);
  }, [searchFilter]);

  useEffect(() => {
    if (searchFilter) {
      if (apiFilter === 'Foods') {
        foodAPI();
        console.log('ok esta funcionando food');
      } else if (apiFilter === 'Drinks') {
        drinkAPI();
        console.log('ok esta funcionando drink');
      }
    } else {
      console.log('tem algo de errado');
    }
  }, [apiFilter, searchFilter, foodAPI, drinkAPI]);

  const contextValue = {
    data,
    setData,
    searchFilter,
    setSearchFilter,
    apiFilter,
    setApiFilter,
    email,
    setEmail,
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
