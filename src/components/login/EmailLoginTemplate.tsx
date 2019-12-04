import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const EmailLoginTemplateBlock = styled.div`
  /* background: ${palette.gray1}; */
  min-height: 100vh;
  position: relative;

  .login-body {
    padding: 74px 0;
    position: relative;
    min-height: calc(100vh - 114px);
    @media (max-width: 964px) {
      padding: 20px;
      min-height: calc(100vh - 80px);
    }
  }
`;

interface EmailLoginTemplateProps {
  children: React.ReactNode;
}

const EmailLoginTemplate = ({ children }: EmailLoginTemplateProps) => {
  return (
    <EmailLoginTemplateBlock>
      <section className="login-body">{children}</section>
    </EmailLoginTemplateBlock>
  );
};

export default EmailLoginTemplate;
