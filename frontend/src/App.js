import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormModal from './components/LoginFormModal/LoginForm';
import Navigation from './components/Navigation';
import ReservationPage from './components/ReservationPage';
import RestaurantIndexPage from './components/RestaurantIndexPage';
import RestaurantShowPage from './components/RestaurantShowPage';
import SignupFormModal from './components/SignupFormModal';

function App() {
  return (
    <>
      <Navigation />

        <Switch>
          <Route path='/restaurants/:restaurantId'>
            <RestaurantShowPage />
          </Route>
          
          {/* <Route path='/reservations/new'>

          </Route> */}


          {/* <Route path="/signIn">
            <LoginFormModal />
          </Route> */}

          {/* <Route path='/signUp'>
            <SignupFormModal />
          </Route> */}
    
          <Route path='/reservations/:reservationId'>
            <ReservationPage />
          </Route>

          <Route path='/'>
            <RestaurantIndexPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;
