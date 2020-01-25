import React from 'react';
import styled from 'styled-components';
import OwlItems from './OwlItems';
import carouselData from '../../lib/data/carousel';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const CarouselBlock = styled.div`
  width: auto;
  height: 380.64px;
  min-height: 380.64px;
  position: relative;
  margin: 0 auto;
  margin-top: 170px !important;
  .owl-carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

const Frame = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.gray1};
  overflow: hidden;
  a {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

interface CarouselProps {}

const Carousel = ({  }: CarouselProps) => {
  const frames = carouselData.map((carousel, i) => (
    <React.Fragment>
      <Frame key={`owls-${i}`}>
        <Link to="/">
          <img src={carousel.bg_img} alt="" />
        </Link>
      </Frame>
    </React.Fragment>
  ));

  return (
    <CarouselBlock>
      <div className="owl-carousel">
        <OwlItems frames={frames} />
      </div>
    </CarouselBlock>
  );
};

export default Carousel;
