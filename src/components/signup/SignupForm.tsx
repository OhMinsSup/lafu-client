import React from 'react';
import styled from 'styled-components';
import SignupInputs from './SignupInputs';

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

interface SignupFormProps {}

const SignupForm = ({  }: SignupFormProps) => {
  return (
    <SignupFormBlock>
      <div className="signup-wrapper">
        <div className="signup-area">
          <h1>회원가입</h1>
          <h2>플랫폼을 이용하기 위해서 계정 생성을 완료해주세요.</h2>
          <SignupInputs />
        </div>
      </div>
    </SignupFormBlock>
  );
};

export default SignupForm;
