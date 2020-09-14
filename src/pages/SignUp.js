import React from 'react';
import * as Div from '../components/Divs';
import * as Input from '../components/Inputs';
import * as Buttons from '../components/Buttons';
import Footer from '../components/Footer';

export default function SignUp() {
    return (
        <Div.SecundaryContainer>
          <Div.Header>SIGN UP</Div.Header>
          <Div.DivContent>
            <Div.DivInputs>
                <Input.InputDefault placeholder="name" />
                <Input.InputDefault placeholder="username" />
                <Input.InputDefault placeholder="email" />
                <Input.InputDefault placeholder="password" />
                <Input.InputDefault placeholder="confirm password" />
                <Buttons.ConfirmButton>submit</Buttons.ConfirmButton>
            </Div.DivInputs>
          </Div.DivContent>
          <Footer />
        </Div.SecundaryContainer>
    )
}