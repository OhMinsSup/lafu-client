import React from 'react';
import { useHistory } from 'react-router';
import LandingTemplate from '../components/landing/LandingTemplate';
import LandingFrom from '../components/landing/LandingForm';

interface LandingPageProps {}
const LandingPage = ({  }: LandingPageProps) => {
  const history = useHistory();
  return (
    <LandingTemplate>
      <LandingFrom history={history} />
    </LandingTemplate>
  );
};

export default LandingPage;
