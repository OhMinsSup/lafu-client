import React from 'react';
import { useHistory } from 'react-router';

interface EmailLoginPageProps {}
const EmailLoginPage = ({  }: EmailLoginPageProps) => {
  const history = useHistory();
  return <div>이메일 로그인</div>;
};

export default EmailLoginPage;
