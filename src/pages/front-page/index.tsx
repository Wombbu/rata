import * as React from 'react';
import styled from 'styled-components';
import { GradientPage } from '../../components/pages';
import { InputWrapper, SearchButton, SearchInput } from '../../components/inputs';
import FadeImage from '../../components/fade-image';
import CoinFlip from '../../components/coin-flip';

interface FrontPageProps {
  padding: number; 
  flipped: boolean;
}

const Title = styled.h1`
  align-self: center;
  color: white;
  text-align: center;
`;

const FrontPageWrapper = GradientPage.extend`
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  height: 50vh;
  display: flex;
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
    <LogoContainer>
        <FadeImage onLoad={() => console.log('loaded')} />
    </LogoContainer>
    <CoinFlip flipped={props.flipped} />
    <Title> Rata </Title>
    <InputArea placeholder="Station" />
    <InputArea placeholder="Train number" />
  </FrontPageWrapper>
);