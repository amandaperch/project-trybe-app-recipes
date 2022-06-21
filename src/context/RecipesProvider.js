import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [data, setData] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [apiFilter, setApiFilter] = useState();

  const foodAPI = useCallback(async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/';
    const { meals } = await fetch(`${url}${searchFilter}`)
      .then((response) => response.json());
    setData(meals);
    console.log(data);
  }, [searchFilter]);

  // requisição FOOD
  // const foodAPI = async () => {
  //   const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  //   const { meals } = await fetch(url)
  //     .then((response) => response.json());
  //   setData(meals);
  //   console.log(data);
  // };

  useEffect(() => {
    if (searchFilter) {
      if (apiFilter === 'Foods') {
        foodAPI();
        console.log();
        console.log('ok esta funcionando food');
      } else if (apiFilter === 'Drinks') {
        console.log('ok esta funcionando drink');
      }
    } else {
      console.log('batatinha');
    }
  }, [apiFilter, foodAPI, searchFilter]);

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
