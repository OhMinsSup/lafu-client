import React from 'react';
import { History } from 'history';
import SignupForm from '../../components/signup/SignupForm';

interface SignupFormContainerProps {
  history: History<any>;
}

const SignupFormContainer = ({ history }: SignupFormContainerProps) => {
  return <SignupForm />;
};

export default SignupFormContainer;
