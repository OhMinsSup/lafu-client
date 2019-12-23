import React from 'react';
import styled from 'styled-components';
import LabelInput from './LabelInput';
import useInputs from '../../lib/hooks/useInputs';
import palette from '../../lib/styles/palette';

const SignupFormBlock = styled.section`
  width: 900px !important;
  /* height: 550px !important; */
  line-height: 20px;
  font-size: 16px;
  background-size: 100%;
  background-image: url('https://cdn-images-1.medium.com/max/900/1*PkAMoj_DDiIl4sMibfqNdA.png');
  background-repeat: no-repeat !important;

  h1 {
    font-family: medium-marketing-display-font, Georgia, Cambria,
      'Times New Roman', Times, serif !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 32px !important;
    line-height: 36px !important;
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    color: rgba(0, 0, 0, 0.84) !important;
    fill: rgba(0, 0, 0, 0.84) !important;
    margin-bottom: 15px !important;
  }

  h2 {
    font-weight: 400 !important;
    font-family: medium-content-sans-serif-font, 'Lucida Grande',
      'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif !important;
    letter-spacing: -0.02em !important;
    font-weight: 400 !important;
    font-style: normal !important;
    letter-spacing: 0 !important;
    font-size: 19px !important;
    line-height: 24px !important;
    -webkit-transform: translateY(-1.32px);
    transform: translateY(-1.32px);
    color: rgba(0, 0, 0, 0.76) !important;
    fill: rgba(0, 0, 0, 0.76) !important;
    margin-bottom: 40px !important;
  }

  @media (max-width: 767px) {
    height: 100vh !important;
    width: 100vw !important;
    background-image: none !important;
  }

  .signup-wrapper {
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    align-items: center !important;
    background-color: #fff !important;
    width: 500px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    box-sizing: border-box !important;
    @media (max-width: 767px) {
      height: 100vh !important;
      width: 100vw !important;
    }
    .signup-area {
      text-align: center !important;
      padding-left: 60px !important;
      padding-right: 60px !important;
      padding-top: 100px !important;
      padding-bottom: 100px !important;
      @media (max-width: 767px) {
        padding-top: 60px !important;
        padding-bottom: 0px !important;
      }
    }
  }
`;

const SignupInputsBlock = styled.form`
  width: 100% !important;
  .button-color {
    height: 37px;
    line-height: 37px;
    padding: 0 18px;
    background: rgba(0, 0, 0, 0.84);
    border-color: rgba(0, 0, 0, 0.84);
    color: rgba(255, 255, 255, 0.97);
    font-size: 17px;
    border: 0;
    border-radius: 4px;
    transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  }

  .signup-button {
    display: block !important;
    text-transform: none;
    overflow: visible;
    position: relative;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    vertical-align: bottom;
    white-space: nowrap;
    user-select: none;
    box-sizing: border-box;
    font-family: medium-content-sans-serif-font, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05);
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 30px !important;
  }

  .form-bottom {
    margin-top: 6rem;
  }
  .error {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${palette.red5};
    font-weight: bold;
  }
`;

export type SignupFormType = {
  displayName: string;
  username: string;
  email: string;
  shortBio: string;
};

interface SignupFormProps {
  disabledEmail: string | null;
  error: string | null;
  onSignup: (form: SignupFormType) => Promise<boolean>;
}

const SignupForm = ({ onSignup, disabledEmail, error }: SignupFormProps) => {
  const [form, onChange] = useInputs({
    displayName: '',
    username: '',
    email: '',
    shortBio: '',
  });

  const { displayName, username, email, shortBio } = form;

  const onSubmit = React.useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      await onSignup(form);
    },
    [form, onSignup],
  );

  return (
    <SignupFormBlock>
      <div className="signup-wrapper">
        <div className="signup-area">
          <h1>회원가입</h1>
          <h2>플랫폼을 이용하기 위해서 계정 생성을 완료해주세요.</h2>
          <SignupInputsBlock>
            <LabelInput
              label="Your full name"
              name="displayName"
              value={displayName}
              onChange={onChange}
              placeHolder="이름을 입력해주세요."
            />
            <LabelInput
              label="Your username"
              name="username"
              value={username}
              onChange={onChange}
              placeHolder="아이디를 입력하세요."
            />
            {disabledEmail && (
              <LabelInput
                label="Your email"
                name="email"
                value={disabledEmail || email}
                onChange={onChange}
                disabled={!!disabledEmail}
                placeHolder="이메일을 입력해주세요."
              />
            )}
            <LabelInput
              label="Your shortBio"
              name="shortBio"
              value={shortBio}
              onChange={onChange}
              placeHolder="당신을 한 줄로 소개해보세요."
            />
            <div className="form-button">
              {error && <div className="error">{error}</div>}
              <button className="signup-button button-color" onClick={onSubmit}>
                가입하기
              </button>
            </div>
          </SignupInputsBlock>
        </div>
      </div>
    </SignupFormBlock>
  );
};

export default SignupForm;
