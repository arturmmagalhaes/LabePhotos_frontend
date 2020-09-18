import React from 'react';
import { render } from '@testing-library/react';
import CreateImage from './CreateImage';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe.skip("Test CreateImagePage", () => {
    const history = createMemoryHistory();
    
    test("CreateImage", () => {

        const { container, getByPlaceholderText } = render(
            <Router history={history}>
                <CreateImage />
            </Router>);
        
        //console.log(container.innerHTML);

        const inputTitle = getByPlaceholderText("title");
        const inputFile = getByPlaceholderText("file");
        const inputCollection = getByPlaceholderText("collection");
        const inputHashtag = getByPlaceholderText("hashtag");

        userEvent.type(inputTitle, "Esquilo");
        userEvent.type(inputFile, "http://");
        userEvent.type(inputCollection, "Animal");
        userEvent.type(inputHashtag, "#Animal");
        
        expect(inputTitle).toHaveValue("Esquilo");
        expect(inputFile).toHaveValue("http://");
        expect(inputCollection).toHaveValue("Animal");
        expect(inputHashtag).toHaveValue("#Animal");

    });
})