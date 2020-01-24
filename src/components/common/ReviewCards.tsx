import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';

const ReviewCardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -1.125rem;
  position: relative;
`;

const ReviewCards = () => {
  return (
    <ReviewCardsBlock>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </ReviewCardsBlock>
  );
};

export default ReviewCards;
