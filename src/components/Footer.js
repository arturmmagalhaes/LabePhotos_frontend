import React from 'react';
import * as Div from './Divs';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Footer() {
    return(
    <Div.Footer>
        <Div.Icon><HomeIcon /></Div.Icon>
        <Div.Icon><PersonIcon /></Div.Icon>
        <Div.Icon><ExitToAppIcon /></Div.Icon>
    </Div.Footer>
    )
}