import * as React from 'react';
import styled from 'styled-components';
import { FrontPage } from './pages/front-page';

const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  * {
    font-family: 'Roboto', sans-serif;
  }
`;

class App extends React.Component<{}, {flipped: boolean}> {

  constructor() {
    super();
    this.state = { flipped: false };

    const flip = () => {
      this.setState({flipped: !this.state.flipped})
      setTimeout(() => {
        flip();
      }, 3000);
    }
    flip();
  }
  render() {
    return (
      <AppWrapper>
        <FrontPage padding={100} flipped={this.state.flipped} />
      </AppWrapper>
    );
  }
}

export default App;
