import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const SignupTemplateBlock = styled.div`
  height: 100%;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  visibility: visible;
  background-repeat: no-repeat !important;
  background-color: ${palette.gray1} !important;
  min-height: 100vh !important;
  @media (max-width: 767px) {
    background-color: #fff !important;
  }
  .signup-content {
    margin-top: 75px !important;
    margin-bottom: 50px !important;
    visibility: visible;
    @media (max-width: 767px) {
      width: 100% !important;
      margin: 0 !important;
    }
  }
`;

interface SignupTemplateProps {
  children: React.ReactNode;
}

const SignupTemplate = ({ children }: SignupTemplateProps) => {
  return (
    <SignupTemplateBlock>
      <div className="signup-content">{children}</div>
    </SignupTemplateBlock>
  );
};

export default SignupTemplate;
