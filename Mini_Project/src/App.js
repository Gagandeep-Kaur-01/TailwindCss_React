import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/pages/Home';
import SignIn from './container/pages/SignIn';

export default function App() {


  return(
    <BrowserRouter>
      <Switch>

      <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signin">
          <SignIn />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}