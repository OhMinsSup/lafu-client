import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { History } from 'history';
import { MdMail as EmailIcon } from 'react-icons/md';
import LoginButton from './LoginButton';
import SocialLoginButtonGroup from './SocialLoginButtonGroup';
import LinkButton from './LinkButton';
import palette from '../../lib/styles/palette';
import transitions from '../../lib/styles/transitions';
import EmailInput from './EmailInput';
import useInput from '../../lib/hooks/useInput';
import EmailSuccess from './EmailSuccess';

const LoginFormBlock = styled.div<{ visible: boolean }>`
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

interface LoginFromProps {
  loading: boolean;
  registered: boolean | null;
  history: History<any>;
  onSendAuthEmail: (email: string) => void;
}
const LoginFrom = ({
  loading,
  onSendAuthEmail,
  registered,
}: LoginFromProps) => {
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
    <LoginFormBlock visible={visible}>
      <div>
        <section className="title-wrapper">
          <h2>LaFu</h2>
          <h4>국내 최대 애니메이션 스트리밍 서비스</h4>
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
            <LoginButton
              types="email"
              toggle={toggle}
              onToggle={onEmailToggle}
              icon={<EmailIcon />}
              text={'이메일로 로그인'}
            />
          ) : null}
          {toggle ? (
            <LoginButton
              types="social"
              toggle={toggle}
              onToggle={onSocialToggle}
              text={'다른 계정으로 로그인'}
            />
          ) : (
            <SocialLoginButtonGroup visible={!visible} />
          )}
          <LinkButton onToggle={onResetToggle} />
        </section>
      </div>
    </LoginFormBlock>
  );
};

export default LoginFrom;
