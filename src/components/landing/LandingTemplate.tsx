import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LandingTemplateBlock = styled.div`
  .background-screen {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    position: fixed;
    background: linear-gradient(to right, ${palette.teal20}, ${palette.cyan20});
  }

  .regist-form {
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 990;
    > .wrapper {
      width: 400px;
      height: 500px;
      max-width: none;
      padding: 0;
      margin: auto;
      outline: 0;
      overflow: hidden;
      transform-origin: bottom center;
      .white-block {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        position: relative;
        background-repeat: no-repeat;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
        text-align: center !important;
        line-height: 20px;
        font-size: 16px;
        background-size: 100%;
      }
    }
  }
`;

interface LandingTemplateProps {
  children: React.ReactNode;
}
const LandingTemplate = ({ children }: LandingTemplateProps) => {
  return (
    <LandingTemplateBlock>
      <div className="background-screen" />
      <div className="regist-form">
        <div className="wrapper">
          <div className="block-content">{children}</div>
        </div>
      </div>
    </LandingTemplateBlock>
  );
};

export default LandingTemplate;
