import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface DailyItemProps {}

const DailyItem: React.FC<DailyItemProps> = () => {
  return (
    <Link className="daily-item" to="/">
      <div className="thumbnail-wrapper">
        <img
          src="https://image.laftel.net/items/thumbs/big/5f65d48f-6bbe-46fe-808c-5b8d5ff3b6ef.jpg"
          alt=""
        />
      </div>
      <div className="title">Fate/Grand Order -절대마수전선 바빌로니아-</div>
      <div className="genres">액션 / 판타지</div>
    </Link>
  );
};

const DailyItemColumnBlock = styled.div`
  min-width: 0px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  flex: 1 1 0%;
  .daily-item {
    display: block;
    position: relative;
    line-height: 1.5;
    color: inherit;
    text-decoration: none;
    .thumbnail-wrapper {
      width: 100%;
      padding-top: 133.33%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        object-fit: cover;
      }
    }
    .title {
      font-weight: 500;
      margin-top: 0.5rem;
      color: rgb(33, 33, 33);
      font-size: 0.875rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
    }
    .genres {
      margin-top: 0.125rem;
      font-size: 0.75rem;
      color: rgb(129, 107, 255);
      height: 1.125rem;
    }
  }
`;

interface DailyItemColumnProps {}
const DailyItemColumn: React.FC<DailyItemColumnProps> = () => {
  return (
    <DailyItemColumnBlock>
      <DailyItem />
      <DailyItem />
      <DailyItem />
      <DailyItem />
      <DailyItem />
      <DailyItem />
    </DailyItemColumnBlock>
  );
};

export default DailyItemColumn;
