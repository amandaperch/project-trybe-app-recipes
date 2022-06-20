import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [data, setData] = useState();
  const [searchFilter, setSearchFilter] = useState();

  // ingredient

  // const fetchData = async () => {
  //   const url = 'https://www.themealdb.com/api/json/v1/1/';
  //   const { meals } = await fetch(`${url}${searchFilter}`)
  //     .then((response) => response.json());
  //   setData(meals);
  // };
  const fetchData = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const { meals } = await fetch(url)
      .then((response) => response.json());
    setData(meals);
  };
  useCallback(() => {
    fetchData();
  }, []);

  const contextValue = {
    data,
    setData,
    searchFilter,
    setSearchFilter,
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
