import React from 'react';
import { render, wait } from '@testing-library/react';
import SignIn from './SignIn';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import api from '../services/api';

api.post = jest.fn().mockResolvedValue();

describe("Testes SignInPage", () => {
  
    test("SignIn", async () => {
      expect.assertions(3);
      const history = createMemoryHistory();
      const { container, getByText, getByPlaceholderText } = render(<Router history={history}>
        <SignIn />
      </Router>);
      
      //console.log(container.innerHTML);

      const inputEmail = getByPlaceholderText(/email/i);
      const inputPassword = getByPlaceholderText("password");
      const buttonSubmit = getByText(/submit/i);

      userEvent.type(inputEmail, "arturmm@gmail.com");
      userEvent.type(inputPassword, "123456");
      userEvent.click(buttonSubmit);

      await wait(() => {
        expect(inputEmail).toHaveValue("arturmm@gmail.com");
        expect(inputPassword).toHaveValue("123456");
        expect(api.post).toHaveBeenCalled();
      });
    });
  });
  