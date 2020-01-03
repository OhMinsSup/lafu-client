import React from 'react';
import { useHistory } from 'react-router-dom';
import MainContainer from '../containers/main/MainContainer';
import LayoutTemplate from '../components/common/LayoutTemplate';

const MainPage = () => {
  const history = useHistory();
  return (
    <LayoutTemplate>
      <MainContainer />
    </LayoutTemplate>
  );
};

export default MainPage;
