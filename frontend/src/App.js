import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormModal from './components/LoginFormModal/LoginForm';
import Navigation from './components/Navigation';
import RestaurantIndexPage from './components/RestaurantIndexPage';
import SignupFormModal from './components/SignupFormModal';

function App() {
  return (
    <>
      <Navigation />

        <Switch>
          <Route exact path='/'>
            <RestaurantIndexPage />
          </Route>
          {/* <Route path="/signIn">
            <LoginFormModal />
          </Route> */}

          {/* <Route path='/signUp'>
            <SignupFormModal />
          </Route> */}
    
        </Switch>
    </>
  );
}

export default App;
