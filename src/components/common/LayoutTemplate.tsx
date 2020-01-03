import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../../containers/base/HeaderContainer';
import FooterContainer from '../../containers/base/FooterContainer';

const LayoutTemplateBlock = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  .App {
    height: 100%;
  }
`;

interface LayoutTemplateProps {
  children: React.ReactNode;
}

const LayoutTemplate = ({ children }: LayoutTemplateProps) => {
  return (
    <LayoutTemplateBlock>
      <div className="App">
        <HeaderContainer />
        {children}
        <FooterContainer />
      </div>
    </LayoutTemplateBlock>
  );
};

export default LayoutTemplate;
