import React from 'react';
import { getByTestId, getByTitle, render, wait } from '@testing-library/react';
import Profile from './Profile';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe("Testes ProfilePage", () => {

    const obj = JSON.stringify(
            { 
                "name": "Maria", 
                "username": "mariamm", 
                "email": "mhmm@gmail.com", 
                }
        );
        
    window.localStorage.setItem("user", obj);
    window.localStorage.setItem("token", "JWT");

    test("Profile", async () => {
        
        const history = createMemoryHistory();
        const { container, getByText, getByPlaceholderText } = render(<Router history={history}>
            <Profile />
        </Router>);

        //console.log(container.innerHTML);

        const userName = getByText("MARIA");
        const userNickname = getByText("MARIAMM");
        const userEmail = getByText(/mhmm@gmail.com/i);
        
        expect(userName).toBeInTheDocument();
        expect(userNickname).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
        
    });
  });
  