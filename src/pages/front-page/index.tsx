import * as React from 'react';
import styled from 'styled-components';
import { GradientPage } from '../../components/pages';
import { InputWrapper, SearchButton, SearchInput } from '../../components/inputs';
// import FadeImage from '../../components/fade-image';
import { OneSidedCoin } from '../../components/coin-flip';

interface FrontPageProps {
  padding: number; 
  flipped: boolean;
}

const Title = styled.h1`
  align-self: center;
  color: white;
  text-align: center;
  font-weight: lighter;
  font-size: 7em;
  opacity: 0.6;
  margin: 10px;
  margin-top: 20px;
`;

const FrontPageWrapper = GradientPage.extend`
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const InputArea = (props: {placeholder: string}) => (
  <InputWrapper>
    <SearchInput type="text" placeholder={props.placeholder}/>
    <SearchButton> Find! </SearchButton>
  </InputWrapper>
);

var flipped = true;

setTimeout(() => {
  flipped = false;
}, 1000);

export const FrontPage = (props: FrontPageProps) => (
  <FrontPageWrapper
    color1="#404ec1" 
    color2="#14f3eb"
  >
    <Title> RAIDE </Title>
    <OneSidedCoin flipped={props.flipped} size={280} />
    <LogoContainer>
      <InputArea placeholder="Station" />
      <InputArea placeholder="Train number" />
    </LogoContainer>
  </FrontPageWrapper>
);