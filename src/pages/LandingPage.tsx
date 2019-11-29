import React from 'react';
import { useHistory } from 'react-router';
import LandingTemplate from '../components/landing/LandingTemplate';
import LandingFormContainer from '../containers/auth/LandingFormContainer';

interface LandingPageProps {}
const LandingPage = ({  }: LandingPageProps) => {
  const history = useHistory();
  return (
    <LandingTemplate>
      <LandingFormContainer history={history} />
    </LandingTemplate>
  );
};

export default LandingPage;
