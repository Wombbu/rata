import * as React from 'react';
import styled from 'styled-components';
import { FrontPage } from './pages/front-page';
import { Provider } from 'react-redux';
import store from './state'


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
    // this.setState({flipped: !this.state.flipped})
    const flip = () => {
      this.setState({flipped: !this.state.flipped})
      setTimeout(() => {
        flip();
      }, 5000);
    }
    // flip();
  }
  render() {
    return (
      <Provider store={store}>
        <AppWrapper onClick={() => this.setState({flipped: !this.state.flipped})}>
          <FrontPage flipped={this.state.flipped} />
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
