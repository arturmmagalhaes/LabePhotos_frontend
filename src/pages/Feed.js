import React, { useState, useEffect } from 'react';
import * as Div from '../components/Divs';
import Footer from '../components/Footer';
import api from '../services/api';

export default function Feed() {
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    
    useEffect(() => {
        //api.get()
    },[]);
    
    return(
        <Div.SecundaryContainer>
            <Div.Header>LABEPHOTOS</Div.Header>
            <Div.DivContent>
                <Div.Image />
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}