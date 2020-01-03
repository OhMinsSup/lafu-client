import React from 'react';
import styled from 'styled-components';

const LinkButtonBlock = styled.div`
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

interface LinkButtonProps {
  onToggle: () => void;
}
const LandingLinkButton = ({
  onToggle,
}: LinkButtonProps) => {
  return (
    <LinkButtonBlock>
      <button className="link" onClick={onToggle}>
      이메일로 로그인
      </button>
    </LinkButtonBlock>
  );
};

export default LandingLinkButton;
