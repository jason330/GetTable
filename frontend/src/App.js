import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormModal from './components/LoginFormModal';
import Navigation from './components/Navigation';
import SignupFormModal from './components/SignupFormModal';

function App() {
  return (
    // <Switch>
    <>
      <Route path='/'>
        <Navigation />
      </Route>
      
      <Route path="/signIn">
        <LoginFormModal />
      </Route>

      <Route path='/signUp'>
        <SignupFormModal />
      </Route>
    
    </>
    // </Switch>
  );
}

export default App;
