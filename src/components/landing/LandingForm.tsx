import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { History } from 'history';
import { MdMail as EmailIcon } from 'react-icons/md';
import LandingLoginButton from './LandingLoginButton';
import SocialLoginButtonGroup from './SocialLoginButtonGroup';
import LandingLink from './LandingLinkButton';
import palette from '../../lib/styles/palette';
import transitions from '../../lib/styles/transitions';
import EmailInput from './EmailInput';
import useInput from '../../lib/hooks/useInput';
import EmailSuccess from './EmailSuccess';

const LandingFromBlock = styled.div<{ visible: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  h2,
  h4 {
    margin: 0;
  }
  h2 {
    font-size: 3rem;
    color: #ffff;
  }
  h4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #ffff;
  }
  section {
    width: 350px;
    margin: 0 auto;
  }
  section + section {
    margin-top: 5rem;
  }
  .title-wrapper {
    text-align: center;
  }
  .btn-wrapper {
    ${props =>
      props.visible
        ? css`
            animation: ${transitions.fadeOut} 0.5s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.fadeIn} 0.5s forwards ease-in-out;
          `}
  }
  .foot {
    text-align: center;
    margin-top: 2rem;
    span {
      margin-right: 0.25rem;
    }
    a {
      font-weight: bold;
      color: ${palette.cyan6};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

interface LandingFromProps {
  loading: boolean;
  registered: boolean | null;
  history: History<any>;
  onSendAuthEmail: (email: string) => void;
}
const LandingFrom = ({
  loading,
  onSendAuthEmail,
  registered,
}: LandingFromProps) => {
  // email 입력
  const [email, onChangeEmail] = useInput('');

  // email form toggle state
  const [emailToggle, setEmailToggle] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [visible, setVisible] = useState(false);

  const onEmailToggle = useCallback(() => {
    setEmailToggle(true);
  }, [setEmailToggle]);

  const onResetToggle = useCallback(() => {
    setEmailToggle(false);
    setToggle(true);
  }, [setEmailToggle, setToggle]);

  const onSocialToggle = useCallback(() => {
    setVisible(false);
    setToggle(false);
    setEmailToggle(false);
  }, [setToggle, setVisible, setEmailToggle]);

  const onSubmit = (email: string) => {
    onSendAuthEmail(email);
  };

  return (
    <LandingFromBlock visible={visible}>
      <div>
        <section className="title-wrapper">
          <h2>LaFu</h2>
          <h4>여행을 여행답게</h4>
        </section>
        <section className="btn-wrapper">
          {emailToggle && (
            <React.Fragment>
              {registered !== null ? (
                <EmailSuccess registered={registered} />
              ) : (
                <EmailInput
                  value={email}
                  mode="LOGIN"
                  disabled={loading}
                  onChange={onChangeEmail}
                  onSubmit={onSubmit}
                />
              )}
            </React.Fragment>
          )}
          {!emailToggle && toggle ? (
            <LandingLoginButton
              types="email"
              toggle={toggle}
              onToggle={onEmailToggle}
              icon={<EmailIcon />}
              text={'이메일로 로그인'}
            />
          ) : null}
          {toggle ? (
            <LandingLoginButton
              types="social"
              toggle={toggle}
              onToggle={onSocialToggle}
              text={'다른 계정으로 로그인'}
            />
          ) : (
            <SocialLoginButtonGroup visible={!visible} />
          )}
          <LandingLink onToggle={onResetToggle} />
        </section>
      </div>
    </LandingFromBlock>
  );
};

export default LandingFrom;
