import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormModal from './components/LoginFormModal/LoginForm';
import Navigation from './components/Navigation';
import SignupFormModal from './components/SignupFormModal';

function App() {
  return (
    <>
      <Navigation />

        <Switch>
      
          {/* <Route path="/signIn">
            <LoginFormModal />
          </Route> */}

          <Route path='/signUp'>
            <SignupFormModal />
          </Route>
    
        </Switch>
    </>
  );
}

export default App;
