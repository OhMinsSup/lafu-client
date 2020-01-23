import React from 'react';
import Carousel from '../../components/main/Carousel';

interface MainContainerProps {}

const MainContainer = ({}: MainContainerProps) => {
  return (
    <React.Fragment>
      <Carousel />
      메인
    </React.Fragment>
  );
};

export default MainContainer;
