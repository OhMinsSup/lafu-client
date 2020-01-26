import React from 'react';
import styled from 'styled-components';
import LayoutTemplate from '../components/common/LayoutTemplate';
import DailyListContainer from '../containers/daily/DailyListContainer';

const DailyPageBlock = styled.div`
  padding-top: 5rem;
  .daily-main {
    width: 1400px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0px auto;
  }
`;

interface DailyPageProps {}

const DailyPage: React.FC<DailyPageProps> = () => {
  return (
    <LayoutTemplate>
      <DailyPageBlock>
        <div className="daily-main">
          <DailyListContainer />
        </div>
      </DailyPageBlock>
    </LayoutTemplate>
  );
};

export default DailyPage;
