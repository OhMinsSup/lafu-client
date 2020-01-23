/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
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
  width: 12px;
  height: 12px;
  margin: 3px 6px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: ${props => (props.active ? 1.0 : 0.5)};
  cursor: pointer;
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

  return (
    <OwItemsBlock ref={containerRef} style={containerStyle}>
      <React.Fragment>
      {items}
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
