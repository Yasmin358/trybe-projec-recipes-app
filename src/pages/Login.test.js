import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

describe('Testa a página Login', () => {
  test('Testa a renderização do componente', () => {
    const { container } = render(<App />);
    const form = container.querySelector('.login');
    expect(form).toBeInTheDocument();
  });

  test('Testa se o botão é habilitado corretamente', () => {
    render(<App />);
    const emailInput = screen.getByLabelText('Email:');
    // screen.logTestingPlaygroundURL();
    const passwordInput = screen.getByTestId('password-input');
    const btn = screen.getByRole('button');

    userEvent.type(emailInput, 'nome@nome.com');
    userEvent.type(passwordInput, '1234567');

    expect(btn.disabled).toBe(false);
  });
});
