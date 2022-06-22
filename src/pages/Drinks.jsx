import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import Card from '../components/Card';

function Drinks() {
  const drinks = 'Drinks';
  const { data, setApiFilter } = useContext(RecipesContext);

  const verifyRedirect = () => {
    if (!data) {
      setApiFilter(drinks);
    } else if (data.length === 1) {
      console.log('agora sim');
      return <Redirect to={ `/drinks/${data[0].idDrink}` } />;
    }
  };

  return (
    <div>
      {verifyRedirect()}
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
