import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as Div from '../components/Divs';
import * as Input from '../components/Inputs';
import * as Buttons from '../components/Buttons';
import Footer from '../components/Footer';
import useForm from '../customHooks/useForm';


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
        console.log(token);
        axios.post(`http://localhost:3003/photo/create`, form, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response.data);
            history.replace('/feed');
        }).catch(error => {
            console.error(error);
        })
    }

    return (<>
        <Div.SecundaryContainer>
          <Div.Header>CREATE IMAGE</Div.Header>
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