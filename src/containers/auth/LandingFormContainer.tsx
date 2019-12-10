import React from 'react';
import { History } from 'history';
import LandingFrom from '../../components/landing/LandingForm';

interface LandingFormContainerProps {
  history: History<any>;
}

const LandingFormContainer = ({ history }: LandingFormContainerProps) => {
  return (
    <React.Fragment>
      <LandingFrom history={history} />
    </React.Fragment>
  );
};

export default LandingFormContainer;
