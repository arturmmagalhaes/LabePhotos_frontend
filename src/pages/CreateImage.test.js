import React from 'react';
import { render, wait } from '@testing-library/react';
import CreateImage from './CreateImage';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import api from '../services/api';

api.post = jest.fn().mockResolvedValue();

describe("Test CreateImagePage", () => {
    
    test("CreateImage", async () => {
        window.localStorage.setItem("token","JWT");
        
        expect.assertions(5);

        const history = createMemoryHistory();
        const { container, getByPlaceholderText, getByText } = render(
            <Router history={history}>
                <CreateImage />
            </Router>);
        
        await wait(() => {

            const inputTitle = getByPlaceholderText("title");
            const inputFile = getByPlaceholderText("file");
            const inputCollection = getByPlaceholderText("collection");
            const inputHashtag = getByPlaceholderText("hashtag");
            const buttonSubmit = getByText("submit");

            userEvent.type(inputTitle, "Esquilo");
            userEvent.type(inputFile, "http://");
            userEvent.type(inputCollection, "Animal");
            userEvent.type(inputHashtag, "#Animal");

            //console.log(container.innerHTML);
            userEvent.click(buttonSubmit);
            
            expect(inputTitle).toHaveValue("Esquilo");
            expect(inputFile).toHaveValue("http://");
            expect(inputCollection).toHaveValue("Animal");
            expect(inputHashtag).toHaveValue("#Animal");
            expect(api.post).toHaveBeenCalled();
        });
    });
})