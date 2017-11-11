import * as React from 'react';
import * as ReactRedux from 'react-redux';
import styled from 'styled-components';
import LogoImg from '../components/fade-image';
import { OneSidedCoin } from '../components/coin-flip';
import { RootState } from '../state';
import { loadingSelector } from '../state/selectors';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

interface InteractiveLogoProps {
  loading: boolean;
}

interface InteractiveLogoState {
  flipped: boolean;
  vanillaTiltActive: boolean;
}

class InteractiveLogo extends React.Component<InteractiveLogoProps, InteractiveLogoState> {
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
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <OneSidedCoin flipped={this.state.flipped}>
          <LogoImg/>
        </OneSidedCoin>
      </LogoContainer>
    )
  }
}

const mapStateToProps = (state: RootState) => ({ loading: loadingSelector(state)})

export default ReactRedux.connect(mapStateToProps, () => ({}))(InteractiveLogo);