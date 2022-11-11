import React from 'react';
import { Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import LoginFormModal from './components/LoginFormModal/LoginForm';
import Navigation from './components/Navigation';
import ReservationPage from './components/ReservationPage';
import ReservationUpdatePage from './components/ReservationUpdatePage';
import RestaurantIndexPage from './components/RestaurantIndexPage';
import RestaurantShowPage from './components/RestaurantShowPage';
import SignupFormModal from './components/SignupFormModal';
import UserPage from './components/UserPage';

function App() {
  return (
    <main className='entirePageContainer'>
      <header></header>
      <Navigation />
        <section className='pageMainContentContainer'>
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
      
            <Route exact path='/reservations/:reservationId'>
              <ReservationPage />
            </Route>

            <Route exact path='/reservations/modify/:reservationId'>
              <ReservationUpdatePage />
            </Route>

            <Route path='/user/dining-dashboard' >
              <UserPage />
            </Route>

            <Route path='/'>
              <RestaurantIndexPage />
            </Route>
          </Switch>

        </section>
      <Footer />

    </main>
  );
}

export default App;
