import React from 'react';
import * as Div from '../components/Divs';
import Footer from '../components/Footer';
export default function Feed() {
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