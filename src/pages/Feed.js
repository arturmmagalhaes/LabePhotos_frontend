import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Div from '../components/Divs';
import * as Button from '../components/Buttons';
import * as P from '../components/Paragraph';
import Footer from '../components/Footer';
import api from '../services/api';
import Header from '../components/Header';

export default function Feed() {
    const history = useHistory();
    const [token] = useState(localStorage.getItem('token'));
    const [data, setData] = useState([]);

    if(!token){
      history.replace('/signin');
    }

    useEffect(() => {
        api.get('photo/', {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setData(response.data.data);
        }).catch(error => {
            alert('Reconecte na Aplicação');
            history.replace('/signin');
        })
    },[]);
    
    const detailImage = (id) => {
        history.push(`/photo/${id}`)
    }

    const createImage = () => {
        history.push('/createimage');
    }

    return(<Div.SecundaryContainer>
            <Header page="LABEPHOTOS" />
            <Div.DivContent>
                <Button.CreateButton onClick={createImage}>+</Button.CreateButton>
                {data.length > 0 && data.map(element => {
                    return (
                        <Div.Card key={element.id} onClick={() => detailImage(element.id)}>
                            <Div.Image key={element.id} src={element.file}/>
                            <P.PCard>{element.title}</P.PCard>
                        </Div.Card>
                )})}
                {data.length === 0 && 
                <P.PWhite>Ainda não guardou suas imagens</P.PWhite>}
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}