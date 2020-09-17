import React from 'react';
import api from '../services/api';
import useForm from '../customHooks/useForm';
import * as Div from '../components/Divs';
import * as Input from '../components/Inputs';
import * as Buttons from '../components/Buttons';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
    const history = useHistory();
    const { form, handleForm } = useForm({
      email: '',
      password: ''
    });

    const handleInput = event => {
      const {name, value} = event.target;
      handleForm(name, value);
    }

    const onSubmitFunction = (event) => {
      event.preventDefault();

      api.post('signin', form)
        .then(response => {
          console.log(response.data)
          localStorage.setItem("token",(response.data.token));
          localStorage.setItem("user", JSON.stringify(response.data.user));
          history.push('feed');
        })
        .catch(error => {
          alert("Algo deu errado!");
        })
    }

    return (<Div.SecundaryContainer>
          <Div.Header>SIGN IN</Div.Header>
          <Div.DivContent>
            <form onSubmit={onSubmitFunction}>
              <Div.DivInputs>
                <Input.InputDefault 
                  name="email"
                  placeholder="email"
                  onChange={handleInput}
                  value={form.email}
                  required />
                <Input.InputDefault 
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={handleInput}
                  value={form.password}
                  required />
               <Buttons.ConfirmButton>submit</Buttons.ConfirmButton>
              </Div.DivInputs>
            </form>
          </Div.DivContent>
        </Div.SecundaryContainer>
    )
}