import React from 'react';
import { render, wait } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import DetailImage from './DetailImage';
import api from '../services/api';

api.get = jest.fn().mockResolvedValue({
    data: {
        message: ''
    }
});

describe("Test DetailImage", () => {
    test("DetailImage", async () => {
        expect.assertions(4);
        window.localStorage.setItem("token", "JWT");

        api.get = jest.fn().mockResolvedValue({
            data: {
                message: {
                "file": "http://",
                "title": "Animal exótico",
                "collection": "Animal",
                "hashtag": ["#Animal"]
                }
            }
        })
        const history = createMemoryHistory();
        const { container, getByText } = render(<Router history={history}><DetailImage /></Router>)

        await wait(() => {
            //console.log(container.innerHTML);

            const titleText = getByText(/Animal exótico/i);
            const collectionText = getByText("ANIMAL");
            const hashtagText = getByText(/#Animal/i);

            expect(titleText).toBeInTheDocument();
            expect(collectionText).toBeInTheDocument();
            expect(hashtagText).toBeInTheDocument();
            expect(api.get).toHaveBeenCalled();
        },1000);
    });
});