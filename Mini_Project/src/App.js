import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/pages/Home';
import About from './container/pages/About';
import Features from './container/pages/Features';
import Projects from './container/pages/Projects';
import Contact from './container/pages/Contact';
import SignIn from './container/pages/SignIn';
import SignUp from './container/pages/SignUp';

export default function App() {


  return(
    <BrowserRouter>
      <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>  

      <Route exact path="/features">
        <Features />
      </Route>

      <Route exact path="/projects">
        <Projects />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route exact path="/signup">
        <SignUp />
      </Route>

      </Switch>
    </BrowserRouter>
  )
}