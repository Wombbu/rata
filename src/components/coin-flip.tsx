import * as React from "react";
import styled, { css } from "styled-components";

interface SizeProps {
  size: number;
}

interface FlipperProps {
  flipped: boolean;
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
      transform: rotateY(180deg);
    ` : ''}
  transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
`;

const CoinFace = DynamicSize.extend`
  ${(props: SizeProps) => css`
    border-radius: ${props.size / 2}px;
  `}

  display: flex;
  justify-content: center;
  align-items: center;

  backface-visibility: hidden;
  background-color: white;
	position: absolute;
	top: 0;
	left: 0;
`;

const Heads = CoinFace.extend`
  z-index: 2;
	transform: rotateY(0deg);
`;

const Tails = CoinFace.extend`
  transform: rotateY(180deg);
`;

export default (props: SizeProps & FlipperProps) =>
  <CoinContainer size={props.size}>
    <CoinFlipper flipped={props.flipped}>
      <Heads size={props.size}>
        {/* <FadeImage onLoad={() => console.log('loaded')} /> */}
        <h1> Rata </h1>
      </Heads>
      <Tails size={props.size}>
        <h1> Loading... </h1>
      </Tails>
    </CoinFlipper>
  </CoinContainer>