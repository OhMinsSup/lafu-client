import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EmailLoginFormBlock = styled.div`
  display: flex !important;
  flex-wrap: wrap !important;
  flex-direction: row !important;
  width: 1200px;
  margin: auto;
  position: relative;
  justify-content: space-between !important;

  h1 {
    font-weight: 400;
    font-size: 25px;
    line-height: 1.4;
    color: ${palette.gray8};
    margin-bottom: 20px;
  }

  .login-wrapper {
    width: 552px;
    padding: 0 37px;

    @media (max-width: 1200px) and (min-width: 1024px) {
      width: 60%;
      margin-right: 20px;
      padding: 0;
    }
    @media (max-width: 964px) {
      width: 90%;
      margin-bottom: 40px;
      padding: 0 20px;
    }

    @media (max-width: 767px) {
      width: 100%;
      padding: 0;
    }
  }
`;

interface EmailLoginFormProps {}

const EmailLoginForm = ({  }: EmailLoginFormProps) => {
  return (
    <EmailLoginFormBlock>
      <div className="login-wrapper">
        <h1 className="login-header">이메일로 로그인</h1>
      </div>
    </EmailLoginFormBlock>
  );
};

export default EmailLoginForm;
