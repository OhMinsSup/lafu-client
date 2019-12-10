import React from 'react';
import styled from 'styled-components';

const LandingLinkButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  /* font-size: 1rem;
  font-weight: 600;
  color: white;
  border: none; */
  .link {
    font-weight: 600;
    border: none;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
`;

interface LandingLinkButtonProps {
  onToggle: () => void;
}
const LandingLinkButton = ({
  onToggle,
}: LandingLinkButtonProps) => {
  return (
    <LandingLinkButtonBlock>
      <button className="link" onClick={onToggle}>
      이메일로 로그인
      </button>
    </LandingLinkButtonBlock>
  );
};

export default LandingLinkButton;
