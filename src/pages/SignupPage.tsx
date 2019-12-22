import React from 'react';
import { useHistory } from 'react-router';
import SignupTemplate from '../components/signup/SignupTemplate';
import SignupFormContainer from '../containers/auth/SignupFormContainer';

interface SignupPageProps {}
const SignupPage = ({  }: SignupPageProps) => {
  const history = useHistory();
  return (
    <SignupTemplate>
      <SignupFormContainer history={history} />
    </SignupTemplate>
  );
};

export default SignupPage;
