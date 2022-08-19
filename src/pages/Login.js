import React from 'react';

function Login() {
  return (
    <fieldset>
      <label htmlFor="email">
        Email:
        <input id="email" type="email" data-testid="email-input" />

      </label>
      <label htmlFor="password">
        Senha:
        <input type="password" data-testid="password-input" />
      </label>
      <button type="button" data-testid="login-submit-btn">Login</button>
    </fieldset>
  );
}

export default Login;
