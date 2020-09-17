import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Div from '../components/Divs';
import Footer from '../components/Footer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import * as P from '../components/Paragraph';

export default function Profile() {
    const history = useHistory();
    const [user] = useState(JSON.parse(localStorage.getItem("user")));
    const [token] = useState(localStorage.getItem("token"));
    
    if(!token) {
      history.replace('/signin');
    }
    
    return(
        <Div.SecundaryContainer>
            <Div.Header>LABEPHOTOS</Div.Header>
            <Div.DivContent>
                <div>
                    <AssignmentIcon style={{fontSize: 180, color: 'white'}} />
                    <P.PWhite>{String(user.name).toUpperCase()}</P.PWhite>
                    <P.PWhite>{String(user.username).toUpperCase()}</P.PWhite>
                    <P.PWhite>{String(user.email).toUpperCase()}</P.PWhite>
                </div>
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}