import React from 'react';
import { render, wait } from '@testing-library/react';
import SignUp from './SignUp';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import api from '../services/api';

api.post = jest.fn().mockResolvedValue();

describe("Testes SignUpPage", () => {
  
    test("SignUp", async () => {
      expect.assertions(6);

      const history = createMemoryHistory();
      const { container, getByText, getByPlaceholderText } = render(<Router history={history}>
        <SignUp />
      </Router>);
      
      //console.log(container.innerHTML);

      const inputName = getByPlaceholderText("name");
      const inputNickname = getByPlaceholderText(/nickname/i);
      const inputEmail = getByPlaceholderText(/email/i);
      const inputPassword = getByPlaceholderText("password");
      const inputConfirmPassword = getByPlaceholderText(/confirm password/i);
      const buttonSubmit = getByText(/submit/i);

      userEvent.type(inputName, "Artur");
      userEvent.type(inputNickname, "ArturMM");
      userEvent.type(inputEmail, "arturmm@gmail.com");
      userEvent.type(inputPassword, "123456");
      userEvent.type(inputConfirmPassword, "123456");
      
      userEvent.click(buttonSubmit);
      
      await wait (() => {
        expect(inputName).toHaveValue("Artur");
        expect(inputNickname).toHaveValue("ArturMM");
        expect(inputEmail).toHaveValue("arturmm@gmail.com");
        expect(inputPassword).toHaveValue("123456");
        expect(inputConfirmPassword).toHaveValue("123456");
        expect(api.post).toHaveBeenCalledTimes(1);
      });
    });
  });
  