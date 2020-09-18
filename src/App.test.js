import React from 'react';
import { getByPlaceholderText, render } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import userEvent from '@testing-library/user-event';

describe.skip("Testes HomePage", () => {
  
  test("Initial render", () => {
    const { getByText } = render(<App><Home /></App>);
    const logo = getByText(/LABEPHOTOS/i);
    const buttonSignUp = getByText(/SIGN UP/i);
    const buttonSignIn = getByText(/SIGN IN/i);

    expect(logo).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
  });

});

describe.skip("Testes SignUpPage", () => {
  
  test("Home -> SignUp", () => {
    const { getByText, getByPlaceholderText } = render(<App><Home /></App>);
    const logo = getByText(/LABEPHOTOS/i);
    const buttonSignUp = getByText(/SIGN UP/i);
    const buttonSignIn = getByText(/SIGN IN/i);

    expect(logo).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();

    userEvent.click(buttonSignUp);

    const button = getByText(/submit/i);
    const input = getByPlaceholderText(/nickname/i);

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});

describe.skip("Testes SignInPage", () => {
  
    test("Home -> SignIn", () => {
      const { getByText, getByPlaceholderText } = render(<App />);
      const logo = getByText(/LABEPHOTOS/i);
      const buttonSignUp = getByText(/SIGN UP/i);
      const buttonSignIn = getByText(/SIGN IN/i);
  
      expect(logo).toBeInTheDocument();
      expect(buttonSignUp).toBeInTheDocument();
      expect(buttonSignIn).toBeInTheDocument();

      userEvent.click(buttonSignIn);
  
      const email = getByPlaceholderText(/email/i);
      const input = getByText(/submit/i);

      expect(input).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
});

describe.skip("Testes FeedPage", () => {
  
  test('Home -> SignIn -> Feed', () => {
    const { container, getByText } = render(<SignIn/>);
    console.log(container.innerHTML);
  });

});

describe.skip("Testes ProfilePage", () => {
  
  test('Initial render', () => {
    const { getByText } = render(<App><Home /></App>);
    const logo = getByText(/LABEPHOTOS/i);
    const buttonSignUp = getByText(/SIGN UP/i);
    const buttonSignIn = getByText(/SIGN IN/i);
    
    expect(logo).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
  });

});

describe.skip("Testes DetailImagePage", () => {
  
  test('Initial render', () => {
    const { getByText } = render(<App><Home /></App>);
    const logo = getByText(/LABEPHOTOS/i);
    const buttonSignUp = getByText(/SIGN UP/i);
    const buttonSignIn = getByText(/SIGN IN/i);
    
    expect(logo).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
  });

});

describe.skip("Testes CreateImagePage", () => {
  
  test('Initial render', () => {
    const { getByText } = render(<App><Home /></App>);
    const logo = getByText(/LABEPHOTOS/i);
    const buttonSignUp = getByText(/SIGN UP/i);
    const buttonSignIn = getByText(/SIGN IN/i);
    
    expect(logo).toBeInTheDocument();
    expect(buttonSignUp).toBeInTheDocument();
    expect(buttonSignIn).toBeInTheDocument();
  });

});

