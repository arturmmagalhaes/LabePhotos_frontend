import React from 'react';
import { Link } from 'react-router-dom';
import * as Buttons from '../components/Buttons';
import * as Div from '../components/Divs';
import AppCss from '../App.css';

export default function Home() {
    return (
        <Div.Container>
          <div>
            <Div.Logo>
                LABEPHOTOS
            </Div.Logo>
            <Div.DivButtons>
                <Buttons.MiddleButton>
                  <Link to="/signup">SIGN UP</Link> 
                </Buttons.MiddleButton>
                <Buttons.MiddleButton>
                  <Link to="/signin">SIGN IN</Link>
                </Buttons.MiddleButton>
              </Div.DivButtons>
          </div>
        </Div.Container>
    )
}