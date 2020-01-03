import React from 'react';
import styled, { css } from 'styled-components';
import {
  FaFacebookF as FacebookIcon,
  FaGoogle as GoogleIcon,
  FaGithub as GithubIcon,
} from 'react-icons/fa';
import palette from '../../lib/styles/palette';

type ProviderType = 'facebook' | 'google' | 'github';

const SocialLoginButtonBlock = styled.button<{ provider: ProviderType }>`
  display: flex;
  border-radius: 4px;
  border: none;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  transition: all 0.15s ease-in;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.85rem;
  .icon {
    position: absolute;
    font-size: 1.65rem;
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
    props.provider === 'facebook'
      ? css`
          background: #3b5998;
          &:hover {
            background: rgba(59, 89, 152, 0.82);
          }
        `
      : props.provider === 'github'
      ? css`
          background: #272e33;
          &:hover {
            background: rgba(39, 46, 51, 0.77);
          }
        `
      : css`
          background: #c92a2a;
          &:hover {
            background: rgba(201, 42, 42, 0.84);
          }
        `}
`;

const providerMap = {
  github: {
    fontColor: 'white',
    icon: GithubIcon,
    text: '깃헙으로 쉬운시작',
  },
  google: {
    fontColor: 'white',
    icon: GoogleIcon,
    text: '구글로 쉬운시작',
  },
  facebook: {
    fontColor: 'white',
    icon: FacebookIcon,
    text: '페이스북으로 쉬운시작',
  },
};

interface SocialLoginButtonProps {
  provider: ProviderType;
  tabIndex?: number;
}

const SocialLoginButton = ({
  provider,
  tabIndex,
}: SocialLoginButtonProps) => {
  const info = providerMap[provider];
  const { icon: Icon, text, fontColor } = info;
  return (
    <SocialLoginButtonBlock
      provider={provider}
      tabIndex={tabIndex}
      style={{ color: fontColor }}
    >
      <div className="icon">
        <Icon />
      </div>
      <div className="text">
        <span>{text}</span>
      </div>
    </SocialLoginButtonBlock>
  );
};

export default SocialLoginButton;
