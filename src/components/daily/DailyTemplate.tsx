import React from 'react';
import styled from 'styled-components';

const DailyTemplateBlock = styled.div`
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

interface DailyTemplateProps {
  children: React.ReactNode;
}

const DailyTemplate: React.FC<DailyTemplateProps> = ({ children }) => {
  return <DailyTemplateBlock>{children}</DailyTemplateBlock>;
};

export default DailyTemplate;
