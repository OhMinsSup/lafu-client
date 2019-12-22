import React from 'react';
import styled from 'styled-components';
import LabelInput from './LabelInput';

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
`;

const SignupInputs = () => {
  return (
    <SignupInputsBlock>
      <LabelInput
        title="Your full name"
        name="name"
        value="Mins"
        placeHolder="이름을 입력해주세요."
      />
      <LabelInput
        title="Your username"
        name="username"
        value="veloss"
        placeHolder="아이디를 입력하세요."
      />
      <LabelInput
        title="Your email"
        name="email"
        value="mins5190@naver.com"
        placeHolder="이메일을 입력해주세요."
      />
      <LabelInput
        title="Your shortBio"
        name="shortBio"
        value="...."
        placeHolder="당신을 한 줄로 소개해보세요."
      />
      <button className="signup-button button-color">가입하기</button>
    </SignupInputsBlock>
  );
};

export default SignupInputs;
