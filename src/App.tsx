import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Core from './containers/core/Core';

const LoginPage = loadable(() => import('./pages/LoginPage'));
const MainPage = loadable(() => import('./pages/MainPage'));
const SignupPage = loadable(() => import('./pages/SignupPage'));
const ReviewPage = loadable(() => import('./pages/ReviewPage'));

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/signup" component={SignupPage} />
        <Route path="/reviews" component={ReviewPage} />
      </Switch>
      <Core />
    </React.Fragment>
  );
};

export default App;
