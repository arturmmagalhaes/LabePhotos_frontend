import React from 'react';
import * as Div from '../components/Divs';
import Footer from '../components/Footer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import * as P from '../components/Paragraph';

export default function Profile() {
    return(
        <Div.SecundaryContainer>
            <Div.Header>LABEPHOTOS</Div.Header>
            <Div.DivContent>
                <div>
                    <AssignmentIcon style={{fontSize: 180, color: 'white'}} />
                    <P.PWhite>NAME</P.PWhite>
                    <P.PWhite>USERNAME</P.PWhite>
                    <P.PWhite>EMAIL</P.PWhite>
                </div>
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}