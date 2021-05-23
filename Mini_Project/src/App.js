import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './container/pages/SignIn';

export default function App() {


  return(
    <BrowserRouter>
      <Switch>

        <Route path="/signin">
          <SignIn />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}