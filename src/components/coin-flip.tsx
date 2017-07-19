import * as React from "react";
import styled, { css } from "styled-components";

const CoinContainer = styled.div`
  perspective: 1000px;
  width: 320px;
	height: 480px;
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
	height: 480px;
  backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
  background-color: white;

  z-index: 2;
	/* for firefox 31 */
	transform: rotateY(0deg);
`;

const Tails = styled.div`
  width: 320px;
	height: 480px;
  backface-visibility: hidden;
  background-color: yellow;

	position: absolute;
	top: 0;
	left: 0;

  transform: rotateY(180deg);
`;

export default (props: {flipped: boolean}) =>
  <CoinContainer>
    <Coin flipped={props.flipped}>
      <Heads>
        <h1> heads </h1>
      </Heads>
      <Tails>
        <h1> tails </h1>
      </Tails>
    </Coin>
  </CoinContainer>