import React from 'react';
import styled from 'styled-components';

const DaysCirclesBlock = styled.div`
  display: flex;
  width: 100%;
`;

const DayCircleWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 1 1 0%;
  .day-circle-item {
    height: 3rem;
    width: 3rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(97, 97, 97);
    font-weight: 500;
    background: white;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(233, 233, 233);
    border-image: initial;
    border-radius: 1.5rem;
  }
`;

interface DaysCirclesProps {}

const DaysCircles: React.FC<DaysCirclesProps> = () => {
  return (
    <DaysCirclesBlock>
      <DayCircleWrapper>
        <div className="day-circle-item">월</div>
      </DayCircleWrapper>
      <DayCircleWrapper>
        <div className="day-circle-item">화</div>
      </DayCircleWrapper>
      <DayCircleWrapper>
        <div className="day-circle-item">수</div>
      </DayCircleWrapper>
      <DayCircleWrapper>
        <div className="day-circle-item">목</div>
      </DayCircleWrapper>
      <DayCircleWrapper>
        <div className="day-circle-item">금</div>
      </DayCircleWrapper>
      <DayCircleWrapper>
        <div className="day-circle-item">토</div>
      </DayCircleWrapper>
      <DayCircleWrapper>
        <div className="day-circle-item">일</div>
      </DayCircleWrapper>
    </DaysCirclesBlock>
  );
};

export default DaysCircles;
