import React from 'react';
import styled, { css } from 'styled-components';
import SocialLoginButton from './SocialLoginButton';
import transitions from '../../lib/styles/transitions';

const SocialLoginButtonGroupBlock = styled.div<{ visible: boolean }>`
  ${props =>
    props.visible
      ? css`
          animation: ${transitions.fadeIn} 0.5s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.fadeOut} 0.5s forwards ease-in-out;
        `}
`;

interface SocialLoginButtonGroupProps {
  visible: boolean;
}
const SocialLoginButtonGroup = ({
  visible,
}: SocialLoginButtonGroupProps) => {
  return (
    <SocialLoginButtonGroupBlock visible={visible}>
      <SocialLoginButton provider="github" tabIndex={4} />
      <SocialLoginButton provider="google" tabIndex={5} />
      <SocialLoginButton provider="facebook" tabIndex={6} />
    </SocialLoginButtonGroupBlock>
  );
};

export default SocialLoginButtonGroup;
