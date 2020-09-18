import React from 'react';
import { render, wait } from '@testing-library/react';
import Feed from './Feed';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import api from '../services/api';

api.get = jest.fn().mockResolvedValue({
    data: {
        data: []
    }
});

describe("Test FeedPage", () => {   
    test("Test Feed", async () => {
        expect.assertions(3);
        const history = createMemoryHistory();

        window.localStorage.setItem("token", "JWT");

        api.get = jest.fn().mockResolvedValue({
            data: {
                data: [{
                    "id": "1",
                    "file": "http://1",
                    "title": "Photo1"
                }, {
                    "id": "2",
                    "file": "http://2",
                    "title": "Photo2"
                }
            ]}
        });

        const { container, getByText } = render(<Router history={history}><Feed /></Router>);

        await wait(() => {
            //console.log(container.innerHTML)
    
            const title1Text = getByText("Photo1");
            const title2Text = getByText("Photo2");

            expect(title1Text).toBeInTheDocument();
            expect(title2Text).toBeInTheDocument();
            expect(api.get).toHaveBeenCalledTimes(1);
        });
    });
})