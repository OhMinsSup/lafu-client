import React from 'react';
import { useHistory } from 'react-router';
import EmailLoginTemplate from '../components/login/EmailLoginTemplate';
import EmailLoginContainer from '../containers/auth/EmailLoginContainer';

interface EmailLoginPageProps {}
const EmailLoginPage = ({  }: EmailLoginPageProps) => {
  const history = useHistory();
  return (
    <EmailLoginTemplate>
      <EmailLoginContainer history={history}/>
    </EmailLoginTemplate>
  );
};

export default EmailLoginPage;
