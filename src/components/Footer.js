import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Div from './Divs';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Footer() {
    const history = useHistory();
    const logOut = () => {
      localStorage.clear();
      history.replace('/signin');
    }

    return(
    <Div.Footer>
        <Div.Icon>
          <Link to="/feed"><HomeIcon /></Link>
        </Div.Icon>
        <Div.Icon>
          <Link to="/profile"><PersonIcon /></Link>
        </Div.Icon>
        <Div.Icon>
          <ExitToAppIcon onClick={logOut}/>
        </Div.Icon>
    </Div.Footer>
    )
}