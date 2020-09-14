import React from 'react';
import * as Div from '../components/Divs';
import Footer from '../components/Footer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import * as P from '../components/Paragraph';

export default function DetailImage() {
    return(
        <Div.SecundaryContainer>
            <Div.Header>IMAGE</Div.Header>
            <Div.DivContent>
                <div>
                    <Div.Image />
                    <P.PWhite>TITLE</P.PWhite>
                    <P.PWhite>TAGS</P.PWhite>
                    <P.PWhite>COLLECTION</P.PWhite>
                </div>
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}