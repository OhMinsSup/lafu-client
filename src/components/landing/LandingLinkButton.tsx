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
  & > .btn {
    background: transparent;
    border: none;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
  & > .link {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
`;

interface LandingLinkButtonProps {
  registerLink: string;
  onToggle: () => void;
}
const LandingLinkButton = ({
  onToggle,
  registerLink,
}: LandingLinkButtonProps) => {
  return (
    <LandingLinkButtonBlock>
      <button className="btn" onClick={onToggle} style={{ marginRight: '8px' }}>
        이메일로 로그인
      </button>
      /
      <Link className="link" to={registerLink} style={{ marginLeft: '8px' }}>
        회원가입
      </Link>
    </LandingLinkButtonBlock>
  );
};

export default LandingLinkButton;
