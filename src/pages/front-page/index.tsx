import * as React from 'react';
import styled from 'styled-components';
import InteractiveLogo from '../../page-components/interactive-logo';
import { Page } from '../../components/pages';
import { Title, CustomSizeText } from '../../components/text';
import { SuggestionInput } from '../../page-components/suggestion-input';

interface FrontPageProps {
  flipped: boolean;
}

const FrontPageWrapper = Page.extend`
  justify-content: center;
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
  padding-bottom: 6vh;
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 6vh;
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
          <InteractiveLogo loading={this.props.flipped} size={this.state.height * 0.25}/>
        </LogoWrapper>
        <SuggestionInput />
      </FrontPageWrapper>
    )
  }
}

export default FrontPage;
