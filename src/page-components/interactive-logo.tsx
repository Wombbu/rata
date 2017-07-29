import * as React from 'react';
import FadeImage from '../components/fade-image';
import { OneSidedCoin } from '../components/coin-flip';
// When imported, is undefined on runtime. That's why require
const VanillaTilt = require('vanilla-tilt');

interface InteractiveLogoProps {
  loading: boolean;
}

interface InteractiveLogoState {
  flipped: boolean;
}

export default class InteractiveLogo extends React.Component<InteractiveLogoProps, InteractiveLogoState> {
  rotating: boolean = false;
  constructor() {
    super();
    this.state = {flipped: false};
  }

  flipIfNeeded() {
    const flipped = this.state.flipped;
    const loading = this.props.loading;
    console.log(this.props.loading);
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
      <div
        ref={img => VanillaTilt.init(img, {speed: 4000, max: 30, reverse: true})}
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <OneSidedCoin flipped={this.state.flipped}>
          <FadeImage/>
        </OneSidedCoin>
      </div>
    )
  }
}