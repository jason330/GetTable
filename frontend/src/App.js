import React from 'react';
import { Route, Switch } from "react-router-dom";
import LoginFormModal from './components/LoginFormModal';

function App() {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginFormModal />
      </Route>
    </Switch>
  );
}

export default App;
