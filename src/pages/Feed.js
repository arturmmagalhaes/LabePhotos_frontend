import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Div from '../components/Divs';
import * as Button from '../components/Buttons';
import * as P from '../components/Paragraph';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Feed() {
    const history = useHistory();
    const [token] = useState(localStorage.getItem('token'));
    const [data, setData] = useState([]);

    if(!token){
      history.replace('/signin');
    }

    useEffect(() => {
        axios.get('http://localhost:3003/photo/', {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setData(response.data.data);
        }).catch(error => {
            console.error(error);
        })
    },[]);
    
    const detailImage = (id) => {
        history.push(`/photo/${id}`)
    }

    const createImage = () => {
        history.push('/createimage');
    }

    return(
        <Div.SecundaryContainer>
            <Div.Header>LABEPHOTOS</Div.Header>
            <Div.DivContent>
                <Button.CreateButton onClick={createImage}>+</Button.CreateButton>
                {data.length > 0 && data.map(element => {
                    return (
                        <Div.Card key={element.id} onClick={() => detailImage(element.id)}>
                            <Div.Image key={element.id} src={element.file}/>
                            <P.PCard>{element.title}</P.PCard>
                        </Div.Card>
                )})}
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}