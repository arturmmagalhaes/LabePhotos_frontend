import React from 'react';
import { render } from '@testing-library/react';
import SignUp from './SignUp';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';


describe("Testes SignUpPage", () => {
  
    test("SignUp", () => {
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

      userEvent.type(inputName, "Artur");
      userEvent.type(inputNickname, "ArturMM");
      userEvent.type(inputEmail, "arturmm@gmail.com");
      userEvent.type(inputPassword, "123456");
      userEvent.type(inputConfirmPassword, "123456");

      
      expect(inputName).toHaveValue("Artur");
      expect(inputNickname).toHaveValue("ArturMM");
      expect(inputEmail).toHaveValue("arturmm@gmail.com");
      expect(inputPassword).toHaveValue("123456");
      expect(inputConfirmPassword).toHaveValue("123456");
    });
  });
  