import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../customHooks/useForm';
import * as Div from '../components/Divs';
import * as Input from '../components/Inputs';
import * as Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import api from '../services/api';

export default function SignUp() {
    const history = useHistory(); 
    const { form, handleForm } = useForm({
      name: '',
      nickname: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const handleInput = event => {
      const {name, value} = event.target;
      handleForm(name, value)
    }

    const onSubmitFunction = (event) => {
      event.preventDefault();

      if(form.password === form.confirmPassword){
        api.post('signup', form)
        .then(response => {
          alert("Usuário criado!");
          history.push('/signin');
        })
        .catch(error => {
          alert('Algo deu errado!');
        });
      } else {
        alert('Senhas não estão iguais.')
      }
    }

    return (
        <Div.SecundaryContainer>
          <Div.Header>SIGN UP</Div.Header>
          <Div.DivContent>
            <form onSubmit={onSubmitFunction}>
              <Div.DivInputs>
                <Input.InputDefault 
                  name="name"
                  placeholder="name"
                  onChange={handleInput}
                  value={form.name} 
                  required />
                <Input.InputDefault 
                  name="nickname"
                  placeholder="nickname"
                  onChange={handleInput}
                  value={form.nickname}
                  required />
                <Input.InputDefault 
                  name="email"
                  placeholder="email"
                  type="email"
                  onChange={handleInput}
                  value={form.email}
                  required />
                <Input.InputDefault 
                  name="password"
                  placeholder="password"
                  type="password"
                  onChange={handleInput}
                  value={form.password}
                  required />
                <Input.InputDefault 
                  name="confirmPassword"
                  placeholder="confirm password" 
                  type="password"
                  onChange={handleInput}
                  value={form.confirmPassword}
                  required />
                <Buttons.ConfirmButton>submit</Buttons.ConfirmButton>
              </Div.DivInputs>
            </form>
          </Div.DivContent>
          <Footer />
        </Div.SecundaryContainer>
    )
}