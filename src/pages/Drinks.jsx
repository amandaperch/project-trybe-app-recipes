import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Drinks() {
  const drinks = 'Drinks';
  const { data, setApiFilter } = useContext(RecipesContext);
  const history = useHistory();

  if (data) {
    if (data.length === 1) {
      history.push(`/drinks/${data[0].idDrink}`);
    }
  } else {
    setApiFilter(drinks);
  }

  return (
    <div>
      <Header pageTitle="Drinks" btnSearch />
      {!data ? <p>loading</p> : (
        data.map((recipe, index) => (
          <Link
            to={ `drinks/${data[index].idDrink}` }
            key={ index }
          >
            <Card
              index={ index }
              infoRecipe={ recipe }

            />
          </Link>
        ))
        // <p>dsad</p>
      )}
    </div>
  );
}

export default Drinks;
