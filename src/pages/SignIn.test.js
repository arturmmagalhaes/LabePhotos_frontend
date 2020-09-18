import React from 'react';
import { render } from '@testing-library/react';
import SignIn from './SignIn';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe("Testes SignInPage", () => {
  
    test("SignIn", () => {
      const history = createMemoryHistory();
      const { container, getByText, getByPlaceholderText } = render(<Router history={history}>
        <SignIn />
      </Router>);
      
      //console.log(container.innerHTML);

      const inputEmail = getByPlaceholderText(/email/i);
      const inputPassword = getByPlaceholderText("password");

      userEvent.type(inputEmail, "arturmm@gmail.com");
      userEvent.type(inputPassword, "123456");

      expect(inputEmail).toHaveValue("arturmm@gmail.com");
      expect(inputPassword).toHaveValue("123456");
    });
  });
  