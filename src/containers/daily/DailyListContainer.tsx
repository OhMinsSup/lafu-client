import React from 'react';
import DaysCircles from '../../components/daily/DaysCircles';
import DailyTemplate from '../../components/daily/DailyTemplate';
import DailyItemTable from '../../components/daily/DailyItemTable';

interface DailyListContainerProps {}

const DailyListContainer: React.FC<DailyListContainerProps> = () => {
  return (
    <DailyTemplate>
      <DaysCircles />
      <DailyItemTable />
    </DailyTemplate>
  );
};

export default DailyListContainer;
