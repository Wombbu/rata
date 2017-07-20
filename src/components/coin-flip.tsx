import * as React from "react";
import styled, { css } from "styled-components";
// import FadeImage from "./fade-image";

const CoinContainer = styled.div`
  perspective: 1000px;
  width: 320px;
	height: 320px;
`;

const Coin = styled.div`
  ${(props: {flipped: boolean}) => props.flipped ? css`
      transform: rotateY(180deg);
    ` : ''}
  transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
`;

const Heads = styled.div`
  width: 320px;
	height: 320px;
  border-radius: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  backface-visibility: hidden;
  background-color: palevioletred;
	position: absolute;
	top: 0;
	left: 0;
  display: flex;

  z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
`;

const Tails = styled.div`
  width: 320px;
	height: 320px;
  border-radius: 160px;
  background-color: white;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

	position: absolute;
	top: 0;
	left: 0;

  transform: rotateY(180deg);
`;

export default (props: {flipped: boolean}) =>
  <CoinContainer>
    <Coin flipped={props.flipped}>
      <Heads>
        {/* <FadeImage onLoad={() => console.log('loaded')} /> */}
        <h1> Rata </h1>
      </Heads>
      <Tails>
        <h1> Loading... </h1>
      </Tails>
    </Coin>
  </CoinContainer>