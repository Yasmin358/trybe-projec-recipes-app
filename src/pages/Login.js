import React, { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(password.length);
    console.log(password);
    const SIX = 6;
    if (password.length > SIX && isEmail(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleInput = ({ target }) => {
    if (target.type === 'email') {
      setEmail(target.value);
      return null;
    }
    if (target.type === 'password') {
      setPassword(target.value);
      return null;
    }
  };

  return (
    <form className="login">
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ handleInput }
        />

      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          minLength="6"
          data-testid="password-input"
          value={ password }
          onChange={ handleInput }
        />
      </label>
      <button
        type="submit"
        disabled={ disabled }
        data-testid="login-submit-btn"
      >
        Login

      </button>
    </form>
  );
}

export default Login;
