import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as Div from '../components/Divs';
import Footer from '../components/Footer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import * as P from '../components/Paragraph';
import axios from 'axios';

export default function DetailImage() {

    const history = useHistory();
    const params = useParams();
    const [token] = useState(JSON.parse(localStorage.getItem('token')));
    const [data, setData] = useState('');
    const [hashtag, setHashtag] = useState([]);

    if(!token){
      history.replace('/signin');
    }

    useEffect(() => {
        axios.get(`http://localhost:3003/photo/${params.id}`, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setData(response.data.message);
            setHashtag(response.data.message.hashtag);
        }).catch(error => {
            console.error(error);
        })
    },[]);

    return(
        <Div.SecundaryContainer>
            <Div.Header>IMAGE</Div.Header>
            <Div.DivContent>
                <div>
                    <Div.Image src={data.file}/>
                    <P.PWhite>{data.title && String(data.title).toUpperCase()}</P.PWhite>
                    <P.PWhite>{hashtag.map(element => {
                        return (<span key={element}>{element} </span>)
                    })}</P.PWhite>
                    <P.PWhite>{data.collection && String(data.collection).toUpperCase()}</P.PWhite>
                </div>
            </Div.DivContent>
            <Footer />
        </Div.SecundaryContainer>
    )
}