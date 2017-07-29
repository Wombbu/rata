import * as React from 'react';
import styled, { css } from 'styled-components';

interface FlipperProps {
  flipped: boolean;
  flipDegrees: number;
}

const CenterItems = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CoinContainer = CenterItems.extend`
  perspective: 1000px;
`;

const CoinFlipper = CenterItems.extend`
  ${(props: FlipperProps) => props.flipped ? css`
      transform: rotateY(${props.flipDegrees}deg);
    ` : ''}
  transition: 1.6s;
	transform-style: preserve-3d;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const CoinFace = CenterItems.extend`
  border-radius: 50%;
  backface-visibility: visible;
	top: 0;
	left: 0;
`;

interface CoinProps {
  flipped: boolean;
  children?: any;
}

export const OneSidedCoin = (props: CoinProps) =>
  <CoinContainer>
    <CoinFlipper flipped={props.flipped} flipDegrees={360}>
      <CoinFace>
        { props.children }
      </CoinFace>
    </CoinFlipper>
  </CoinContainer>;