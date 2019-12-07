import React from 'react';
import { History } from 'history';
import LandingFrom from '../../components/landing/LandingForm';
import AuthModalContainer from './AuthModalContainer';

interface LandingFormContainerProps {
  history: History<any>;
}

const LandingFormContainer = ({ history }: LandingFormContainerProps) => {
  return (
    <React.Fragment>
      <LandingFrom history={history} />
      <AuthModalContainer />
    </React.Fragment>
  );
};

export default LandingFormContainer;
