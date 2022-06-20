import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* <Route exact path="/foods" component={ Foods } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/foods/:idReceita" component={ Foods2 } />
      <Route exact path="/drinks/:idReceita" component={ Drinks2 } />
      <Route exact path="/foods/:idReceita/in-progress" component={ Foods3 } />
      <Route exact path="/drinks/:idReceita/in-progress" component={ Drinks3 } />
      <Route exact path="/explore" component={ Explore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsIng } />
      <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinksIng } />
      <Route exact path="/explore/foods/nationalities" component={ ExploreFoodsNat } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavRecipes } /> */}
    </Switch>
  );
}

export default App;
