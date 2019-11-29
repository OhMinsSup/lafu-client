import React from 'react';
import { History } from 'history';
import LandingFrom from '../../components/landing/LandingForm';

interface LandingFormContainerProps {
  history: History<any>;
}

const LandingFormContainer = ({ history }: LandingFormContainerProps) => {
  return <LandingFrom history={history} />;
};

export default LandingFormContainer;
