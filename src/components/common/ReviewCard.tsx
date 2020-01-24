import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const ReviewCardBlock = styled.div`
  width: calc(100% * 1 / 2 - 16px);
  margin-bottom: 40px;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  .review-thumbnail {
    width: 100%;
    height: 200px;
    display: block;
    background-size: cover;
    background-position: center;
    background-repeat: none;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
    background-image: url('https://hashnode.imgix.net/res/hashnode/image/upload/v1579687756487/a432RwEIs.png?w=800&auto=format&q=60');
  }
  a {
    color: ${palette.gray7};
    text-decoration: none;
  }
  h1 {
    font-size: 20px;
    line-height: 1.4;
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .review-description {
    display: block;
    font-size: 15px;
    line-height: 1.4;
    margin-bottom: 16px;
  }
  .profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .profile-thumbnail {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      overflow: hidden;
      position: relative;
      margin-right: 8px;
      img {
        width: 100%;
        display: block;
        vertical-align: middle;
        border-style: none;
      }
    }
    .profile-username {
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      margin: 0;
    }
  }
`;

interface ReviewCardProps {}

const ReviewCard = ({  }: ReviewCardProps) => {
  return (
    <ReviewCardBlock>
      <Link className="review-thumbnail" to="/" />
      <h1>
        <Link to="/">
          Faking is Good: Back-end Data and API Prototyping with Faker.js and
          JSON-Server
        </Link>
      </h1>
      <p className="review-description">
        <Link to="/">
          Introduction We are agile! In most of our projects we are asked to
          develop User Interfaces in parallel to the back-end services and APIs.
          This gives us the challenge of Implement and Test the User Interfaces
          without the real and real-like data availa...
        </Link>
      </p>
      <div className="profile-wrapper">
        <Link to="/" className="profile-thumbnail">
          <img
            alt=""
            src="https://hashnode.imgix.net/res/hashnode/image/upload/v1553708268042/lN68QFN3W.jpeg?w=120&amp;h=120&amp;fit=crop&amp;crop=faces&amp;auto=format&amp;q=60"
          />
        </Link>
        <h2 className="profile-name">
          <Link to="/">Tapas Adhikary</Link>
        </h2>
      </div>
    </ReviewCardBlock>
  );
};

export default ReviewCard;
