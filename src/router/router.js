import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Feed from '../pages/Feed';
import DetailImage from '../pages/DetailImage';
import Profile from '../pages/Profile';

export default function Router() {
      return(
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/feed" exact component={Feed}/>
          <Route path="/image/:id" exact component={DetailImage}/>
          <Route path="/profile" exact component={Profile}/>
      </Switch>
      )
}