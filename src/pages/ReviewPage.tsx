import React from 'react';
import styled from 'styled-components';
import LayoutTemplate from '../components/common/LayoutTemplate';
import SideMenu from '../components/common/SideMenu';
import ReviewSideMenu from '../containers/review/ReviewSideMenu';
import PostReviews from '../containers/review/PostReviews';

const ReviewPageBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
  height: 100%;
  padding-top: 80px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  .review-sidemenu {
    width: 264px;
  }
  .review-main {
    flex: 1 1;
    padding-left: 2.5rem;
    padding-top: 2rem;
    overflow: hidden;
  }
`;

const ReviewPage = () => {
  return (
    <LayoutTemplate>
      <ReviewPageBlock>
        <div className="review-sidemenu">
          <SideMenu>
            <ReviewSideMenu />
          </SideMenu>
        </div>
        <div className="review-main">
          <PostReviews />
        </div>
      </ReviewPageBlock>
    </LayoutTemplate>
  );
};

export default ReviewPage;
