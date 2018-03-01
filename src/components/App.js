import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import LandingPage from './landing/Landing';
import SignUpPage from './signup/Signup';
import LoginPage from './login/Login';
import HomePage from './home/Home';

import * as routes from '../constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGNUP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.LOGIN}
        component={() => <LoginPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default App;
