import * as React from 'react';
import styled from 'styled-components';
import { InputWrapper, SearchField } from '../../components/inputs';
import InteractiveLogo from '../../page-components/interactive-logo';
import { Page } from '../../components/pages';
import { Title, CustomSizeText, TempList } from '../../components/text';

interface FrontPageProps {
  flipped: boolean;
}

const FrontPageWrapper = Page.extend`
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputArea = (props: {placeholder: string}) => (
  <InputWrapper>
    <SearchField type="text" placeholder={props.placeholder}/>
  </InputWrapper>
);

export default (props: FrontPageProps) => (
  <FrontPageWrapper>
    <LogoWrapper>
      <Title> RAIDE </Title>
      <InteractiveLogo loading={props.flipped}/>
    </LogoWrapper>
    <div />
      <InputContainer>
        <CustomSizeText style={{ borderBottom: "1px solid rgba(255,255,255,0.5)",padding: "10px", alignSelf: "flex-start"}} size={1}> valitse yleisimmistä </CustomSizeText>
        <TempList size={1.5}>Helsingin asema</TempList>
        <TempList size={1.5}>IC 49</TempList>
        <TempList size={1.5}>Tampere</TempList>
        <CustomSizeText style={{padding: "10px", alignSelf: "flex-start"}} size={1}> tai </CustomSizeText>
        <InputArea placeholder="Kirjoita juna tai asema" />
      </InputContainer>
    <div/>
  </FrontPageWrapper>
);