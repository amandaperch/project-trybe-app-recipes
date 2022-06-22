import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';

const NUM = 6;

function Login() {
  const { email, setEmail } = useContext(RecipesContext);
  const [password, setPassword] = useState('');
  const history = useHistory();

  const validateEmail = () => (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));

  const validatePassword = () => password.length > NUM;

  const jsonEmail = JSON.stringify({ email });

  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', jsonEmail);
    history.push('/foods');
  };

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ handleClick }
        disabled={ !(validatePassword() && validateEmail()) }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
