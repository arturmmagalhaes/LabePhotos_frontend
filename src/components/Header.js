import React from 'react';
import * as Div from './Divs';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

export default function Header(props) {
    const history = useHistory();

    return(<Div.Header>
        <Div.BackPage onClick={() => {history.goBack()}}><ArrowBackIosIcon /></Div.BackPage>
        {props.page}
        <Div.BackPage></Div.BackPage>
    </Div.Header>);
}