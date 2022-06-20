import React from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';

function MyProvider({ children }) {
  const contextValue = {};

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
