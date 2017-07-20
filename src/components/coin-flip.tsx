import * as React from 'react';
import styled, { css } from 'styled-components';
import FadeImage from './fade-image';
// import { LoadingIndicator } from './loading-indicator';

interface SizeProps {
  size: number;
}

interface FlipperProps {
  flipped: boolean;
  flipDegrees: number;
}

const DynamicSize = styled.div`
  ${(props: SizeProps) => css`
    width: ${props.size}px;
    height: ${props.size}px;
  `}
`;

const CoinContainer = DynamicSize.extend`
  perspective: 1000px;
`;

const CoinFlipper = styled.div`
  ${(props: FlipperProps) => props.flipped ? css`
      transform: rotateY(${props.flipDegrees}deg);
    ` : ''}
  transition: 1.6s;
	transform-style: preserve-3d;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
	position: relative;
`;

const CoinFace = DynamicSize.extend`
  ${(props: SizeProps) => css`
    border-radius: ${props.size / 2}px;
  `}

  display: flex;
  justify-content: center;
  align-items: stretch;

  backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
`;

const OneSidedCoinFace = CoinFace.extend`
  backface-visibility: visible;
`

const Heads = CoinFace.extend`
  z-index: 2;
	transform: rotateY(0deg);
`;

const Tails = CoinFace.extend`
  transform: rotateY(180deg);
`;

interface CoinProps extends SizeProps {
  flipped: boolean;
}

export const TwoSidedCoin = (props: CoinProps) =>
  <CoinContainer size={props.size}>
    <CoinFlipper flipped={props.flipped} flipDegrees={180}>
      <Heads size={props.size}>
        <FadeImage onLoad={() => console.log('loaded')} />
      </Heads>
      <Tails size={props.size}>
        <FadeImage onLoad={() => console.log('loaded')} />
      </Tails>
    </CoinFlipper>
  </CoinContainer>;

export const OneSidedCoin = (props: CoinProps) =>
  <CoinContainer size={props.size}>
    <CoinFlipper flipped={props.flipped} flipDegrees={360}>
      <OneSidedCoinFace size={props.size}>
        <FadeImage onLoad={() => console.log('loaded')} />
      </OneSidedCoinFace>
    </CoinFlipper>
  </CoinContainer>