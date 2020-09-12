import React from 'react';
import * as Div from '../components/Divs';
import * as Input from '../components/Inputs';
import * as Buttons from '../components/Buttons';

export default function SignUp() {
    return (
        <Div.ContainerSecundario>
          <Div.Header>SIGN IN</Div.Header>
          <Div.DivContent>
            <Div.DivInputs>
              <Input.InputDefault placeholder="email"/>
              <Input.InputDefault placeholder="password"/>
              <Buttons.ConfirmButton>submit</Buttons.ConfirmButton>
            </Div.DivInputs>
          </Div.DivContent>
        </Div.ContainerSecundario>
    )
}