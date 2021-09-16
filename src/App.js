import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './Pages/Landing';
import Credentials from "./Pages/Credentials";

import 'onsenui/css/onsen-css-components.css';

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/home">
          <Credentials />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
