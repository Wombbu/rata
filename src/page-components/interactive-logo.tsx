import * as React from 'react';
import styled from 'styled-components';
import FadeImage from '../components/fade-image';
import { OneSidedCoin } from '../components/coin-flip';
// When imported, is undefined on runtime. That's why require
const VanillaTilt = require('vanilla-tilt');

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 26vh;
`

interface InteractiveLogoProps {
  loading: boolean;
}

interface InteractiveLogoState {
  flipped: boolean;
  vanillaTiltActive: boolean;
}

export default class InteractiveLogo extends React.Component<InteractiveLogoProps, InteractiveLogoState> {
  rotating: boolean = false;
  constructor() {
    super();
    this.state = {flipped: false, vanillaTiltActive: false};
  }

  flipIfNeeded() {
    const flipped = this.state.flipped;
    const loading = this.props.loading;

    if (loading && !this.rotating) {
      this.rotating = true;
      this.setState({flipped: !flipped});

      setTimeout(() => {
        this.rotating = false;
        this.flipIfNeeded();
      }, 1600);
    }
  }

  componentDidUpdate() {
    this.flipIfNeeded();
  }

  render() {
    return (
      <LogoContainer
        innerRef={div => {
          if (!this.state.vanillaTiltActive) {
            this.setState({vanillaTiltActive: true});
            VanillaTilt.init(div, {speed: 4000, max: 30, reverse: true});
          }
        }}
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <OneSidedCoin flipped={this.state.flipped}>
          <FadeImage/>
        </OneSidedCoin>
      </LogoContainer>
    )
  }
}