import * as React from 'react';
import styled from 'styled-components';
import { SearchField } from '../../components/inputs';
import InteractiveLogo from '../../page-components/interactive-logo';
import { Page } from '../../components/pages';
import { Title, CustomSizeText } from '../../components/text';
import { Suggestions } from '../../page-components/suggestions';

interface FrontPageProps {
  flipped: boolean;
}

const FrontPageWrapper = Page.extend`
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
  max-width: 300px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3vh;
`;

const InfoText = CustomSizeText.extend`
  padding: 10px 0px 6.18px 0px;
`;

const InfoTextWithBorder = InfoText.extend`
  border-bottom: 1px solid rgba(255,255,255,0.5);
`;

export default (props: FrontPageProps) => (
  <FrontPageWrapper>
    <LogoWrapper>
      <Title> RAIDE </Title>
      <InteractiveLogo loading={props.flipped}/>
    </LogoWrapper>
      <InputContainer>
        <InfoTextWithBorder size={1}>
          Valitse yleisimmistä 
        </InfoTextWithBorder>
        <Suggestions searchStr="juuh" searchItems={
            [{searchStr: "juu", action: () => console.log("juuh")}]
          } />
        <InfoText size={1}>
          tai 
        </InfoText>
        <SearchField type="text" placeholder="kirjoita juna tai asema"/>
      </InputContainer>
  </FrontPageWrapper>
);