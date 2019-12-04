import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingLinkButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none;
  .link {
    text-decoration: none;
    color: white;
  }
`;

interface LandingLinkButtonProps {
  emailLink: string;
  registerLink: string;
}
const LandingLinkButton = ({
  emailLink,
  registerLink,
}: LandingLinkButtonProps) => {
  return (
    <LandingLinkButtonBlock>
      <Link className="link" to={emailLink} style={{ marginLeft: '8px' }}>
        이메일로 로그인
      </Link>
      /
      <Link className="link" to={registerLink} style={{ marginLeft: '8px' }}>
        회원가입
      </Link>
    </LandingLinkButtonBlock>
  );
};

export default LandingLinkButton;
