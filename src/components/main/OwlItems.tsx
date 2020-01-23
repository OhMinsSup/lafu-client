/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
import {
  MdKeyboardArrowLeft as LeftArrow,
  MdKeyboardArrowRight as RightArrow,
} from 'react-icons/md';
import useCarousel from '../../lib/hooks/useCarousel';
import palette from '../../lib/styles/palette';

const OwItemsBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const NavgationDots = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const DotItem = styled.div<{ color: string; active: boolean }>`
  width: 20px;
  height: 20px;
  margin: 3px 6px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: ${props => (props.active ? 1.0 : 0.5)};
  cursor: pointer;
`;

const Arrow = styled.div<{ color: string }>`
  width: 8rem;
  font-size: 4rem;
  z-index: 5;
  color: #fff;
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ArrowPrev = styled(Arrow)`
  left: 0;
`;

export const ArrowNext = styled(Arrow)`
  right: 0;
`;

const options = {
  duration: 700,
  threshold: 100,
  dotColor: `${palette.gray2}`,
  arrowColor: `${palette.gray2}`,
  loop: true,
  auto: true,
  interval: 2000,
};

interface OwlItemsProps {
  frames: JSX.Element[];
}
const OwlItems = ({ frames }: OwlItemsProps) => {
  const containerRef = useRef(null);
  const {
    containerStyle,
    normalizeFrames,
    current,
    isLastPage,
    isFirstPage,
    framesStyle,
    onClickNav,
  } = useCarousel({
    options,
    containerRef,
    frames,
  });

  const items = useMemo(
    () =>
      normalizeFrames
        .map((frame, index) => {
          const n = index - 1;
          if (n === current) {
            return frame;
          } else if (n < current) {
            return !options.loop && isFirstPage ? null : frame;
          } else if (n > current) {
            return !options.loop && isLastPage ? null : frame;
          }
        })
        .map((f, i) => (
          <Frame key={`items-${i}`} style={framesStyle[i]}>
            {f}
          </Frame>
        )),
    [current],
  );

  const onNext = () => onClickNav('NEXT');
  const onPrev = () => onClickNav('PREV');

  return (
    <OwItemsBlock ref={containerRef} style={containerStyle}>
      <React.Fragment>{items}</React.Fragment>
      <React.Fragment>
        {(options.loop || !isFirstPage) && (
          <ArrowPrev color={options.arrowColor} onClick={onPrev}>
            <LeftArrow
              style={{
                height: '7rem',
                width: '7rem',
              }}
            />
          </ArrowPrev>
        )}
        {(options.loop || !isLastPage) && (
          <ArrowNext color={options.arrowColor} onClick={onNext}>
            <RightArrow style={{ height: '7rem', width: '7rem' }} />
          </ArrowNext>
        )}
      </React.Fragment>
      <NavgationDots>
        {frames.map((_, i) => (
          <DotItem
            key={`dot-${i}`}
            active={current === i}
            color={options.dotColor}
          />
        ))}
      </NavgationDots>
    </OwItemsBlock>
  );
};

export default OwlItems;
