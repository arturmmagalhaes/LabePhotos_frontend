import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test("Initial render", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(<Router history={history}>
        <Home />
    </Router>);

    //console.log(container.innerHTML);

    const logo = getByText(/LABEPHOTOS/i);
    const buttonSignUp = getByText(/SIGN UP/i);
    const buttonSignIn = getByText(/SIGN IN/i);

    expect(logo).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
  });
