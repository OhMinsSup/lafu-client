import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginTemplate from '../components/login/LoginTemplate';
import LoginFormContainer from '../containers/auth/LoginFormContainer';

const LoginPage = () => {
  const history = useHistory();
  return (
    <LoginTemplate>
      <LoginFormContainer history={history}/>
    </LoginTemplate>
  );
}

export default LoginPage;