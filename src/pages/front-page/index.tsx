import * as React from 'react';
import styled from 'styled-components';
import InteractiveLogo from '../../page-components/interactive-logo';
import { Page } from '../../components/pages';
import { Title, CustomSizeText } from '../../components/text';
import { SuggestionInput } from '../../page-components/suggestion-input';

interface FrontPageProps {

}

const FrontPageWrapper = Page.extend`
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 3vh 0px 3vh 0px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 5em;
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class FrontPage extends React.Component<FrontPageProps, {height: number}> {
  constructor() {
    super();
    this.state = { height: 10};
  }

  render() {
    return (
      <FrontPageWrapper innerRef={(ref: HTMLElement) => {
          if (ref && ref.clientHeight != this.state.height) {
            this.setState({height: ref.clientHeight})
          }
        }}>
        <LogoWrapper>
          <LogoTextWrapper>
            <Title> RAIDE </Title>
            <CustomSizeText size={0.8}> Junatiedot nätisti. </CustomSizeText>
          </LogoTextWrapper>
        </LogoWrapper>
        <InteractiveLogo/>

        <SuggestionInput />
      </FrontPageWrapper>
    )
  }
}

export default FrontPage;
