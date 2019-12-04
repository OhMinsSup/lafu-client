import React from 'react';
import { History } from 'history';
import EmailLoginForm from '../../components/login/EmailLoginForm';

interface EmailLoginContainerProps {
    history: History<any>;
}

const EmailLoginContainer = ({ history }: EmailLoginContainerProps) => {
  return <EmailLoginForm />
};

export default EmailLoginContainer;
