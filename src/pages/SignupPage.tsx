import React from 'react';
import { useHistory } from 'react-router-dom';
import SignupTemplate from '../components/signup/SignupTemplate';
import SignupFormContainer from '../containers/auth/SignupFormContainer';

const SignupPage = () => {
  const history = useHistory();
  return (
    <SignupTemplate>
      <SignupFormContainer history={history} />
    </SignupTemplate>
  );
};

export default SignupPage;
