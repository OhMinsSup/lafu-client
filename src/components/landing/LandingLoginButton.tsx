import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

type RegistType = 'email' | 'social';

const LandingLoginButtonBlock = styled.button<{
  types: RegistType;
  toggle: boolean;
}>`
  display: flex;
  border-radius: 4px;
  border: none;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  transition: all 0.15s ease-in;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 0.85rem;
  .icon {
    position: absolute;
    font-size: 1.75rem;
    padding-right: 10px;
    line-height: 1px;
    border-right: 1px solid ${palette.gray2};
  }
  .text {
    margin: 0 auto;
    font-size: 1.15em;
    font-weight: 600;
  }

  ${props =>
    props.types === 'email'
      ? css`
          color: ${palette.teal20};
          background: white;
          &:hover {
            background: #ffffffcf;
          }
        `
      : css`
          color: white;
          background: linear-gradient(
            to right,
            ${palette.teal21},
            ${palette.cyan21}
          );
          &:hover {
            background: linear-gradient(
              to right,
              ${palette.teal31},
              ${palette.cyan31}
            );
          }
        `}
`;

interface LandingLoginButtonProps {
  icon?: React.ReactNode;
  types: RegistType;
  text: string;
  toggle: boolean;
  onToggle?: () => void;
}
const LandingLoginButton = ({
  icon,
  text,
  types,
  toggle,
  onToggle,
}: LandingLoginButtonProps) => {
  return (
    <LandingLoginButtonBlock toggle={toggle} types={types} onClick={onToggle}>
      {icon ? <div className="icon">{icon}</div> : null}
      <div className="text">
        <span>{text}</span>
      </div>
    </LandingLoginButtonBlock>
  );
};

export default LandingLoginButton;
