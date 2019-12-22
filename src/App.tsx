import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StortState } from './store/modules';
import loadable from '@loadable/component';
import Core from './containers/core/Core';

const LandingPage = loadable(() => import('./pages/LandingPage'));
const SignupPage = loadable(() => import('./pages/SignupPage'));

const App = () => {
  const isLoggedIn = useSelector((state: StortState) => state.user.isLoggedIn);
  return (
    <React.Fragment>
      {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
      <Core />
    </React.Fragment>
  );
};

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/signup" component={SignupPage} />
  </Switch>
);

const LoggedInRoutes = () => <div>로그인중</div>;

export default App;
