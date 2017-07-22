import * as React from 'react';
import styled from 'styled-components';
import { GradientPage } from '../../components/pages';
import { InputWrapper, SearchButton, SearchInput } from '../../components/inputs';
// import FadeImage from '../../components/fade-image';
import InteractiveLogo from '../../page-components/interactive-logo';

interface FrontPageProps {
  flipped: boolean;
}

const Title = styled.h1`
  align-self: center;
  color: white;
  text-align: center;
  font-weight: 100;
  font-size: 6em;
  opacity: 0.6;
  margin: 0px;
`;

const FrontPageWrapper = GradientPage.extend`
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const InputArea = (props: {placeholder: string}) => (
  <InputWrapper>
    <SearchInput type="text" placeholder={props.placeholder}/>
    <SearchButton> Find! </SearchButton>
  </InputWrapper>
);
// color1="#404ec1" 
// color2="#14f3eb"

export const FrontPage = (props: FrontPageProps) => (
  <FrontPageWrapper
    color1="#404ec1" 
    color2="#14f3eb"
  >
    <Title> RAIDE </Title>
    <InteractiveLogo loading={props.flipped}/>
    <InputContainer>
      <InputArea placeholder="Station" />
      <InputArea placeholder="Train number" />
    </InputContainer>
  </FrontPageWrapper>
);