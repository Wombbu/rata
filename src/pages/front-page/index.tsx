import * as React from 'react';
import styled from 'styled-components';
import InteractiveLogo from '../../page-components/interactive-logo';
import { Page } from '../../components/pages';
import { Title } from '../../components/text';
import { SuggestionInput } from '../../page-components/suggestion-input';

interface FrontPageProps {
  flipped: boolean;
}

const FrontPageWrapper = Page.extend`
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding-bottom: 3vh;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3vh;
`;

export default (props: FrontPageProps) => (
  <FrontPageWrapper>
    <LogoWrapper>
      <Title> RAIDE </Title>
      <InteractiveLogo loading={props.flipped}/>
    </LogoWrapper>
    <SuggestionInput />
    
  </FrontPageWrapper>
);