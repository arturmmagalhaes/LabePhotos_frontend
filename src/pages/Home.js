import React from 'react';
import * as Buttons from '../components/Buttons';
import * as Div from '../components/Divs';

export default function Home() {
    return (
        <Div.Container>
          <div>
            <Div.Logo>
                LABEPHOTOS
            </Div.Logo>
            <Div.DivButtons>
                <Buttons.MiddleButton>SIGN UP</Buttons.MiddleButton> 
                <Buttons.MiddleButton>SIGN IN</Buttons.MiddleButton>
              </Div.DivButtons>
          </div>
        </Div.Container>
    )
}