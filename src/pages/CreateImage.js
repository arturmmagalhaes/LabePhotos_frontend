import React from 'react';
import api from '../services/api';
import { useHistory } from 'react-router-dom';
import * as Div from '../components/Divs';
import * as Input from '../components/Inputs';
import * as Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import useForm from '../customHooks/useForm';
import Header from '../components/Header';


export default function CreateImage() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    const { form, handleForm } = useForm({
        title: '',
        file: '',
        collection: '',
        hashtag: ''
    });

    if(!token) {
        history.replace('/signin');
    }

    const handleInput = (event) => {
        const {name, value} = event.target
        handleForm(name, value);
    }

    const onSubmitFunction = (event) => {
        console.log(form)
        event.preventDefault();
        api.post(`photo/create`, form, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            history.replace('/feed');
        }).catch(error => {
            console.error(error);
        })
    }

    return (<>
        <Div.SecundaryContainer>
          <Header page="CREATE" />
          <Div.DivContent>
            <form onSubmit={onSubmitFunction}>
              <Div.DivInputs>
                <Input.InputDefault 
                  name="title"
                  placeholder="title"
                  onChange={handleInput}
                  value={form.title} 
                  required />
                <Input.InputDefault 
                  name="file"
                  placeholder="file"
                  onChange={handleInput}
                  value={form.file}
                  required />
                <Input.InputDefault 
                  name="collection"
                  placeholder="collection"
                  onChange={handleInput}
                  value={form.collection}
                  required />
                <Input.InputDefault 
                  name="hashtag"
                  placeholder="hashtag"
                  onChange={handleInput}
                  value={form.hashtag}
                  required />
                <Buttons.ConfirmButton>submit</Buttons.ConfirmButton>
              </Div.DivInputs>
            </form>
          </Div.DivContent>
          <Footer />
        </Div.SecundaryContainer>
    </>);
}