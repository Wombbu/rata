import * as React from 'react';
import FrontPage from './pages/front-page';
import { Provider } from 'react-redux';
import { GradientPage } from './components/pages';
import store from './state'
import ResultPage from './pages/result-page';

const AppWrapper = GradientPage.extend`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  * {
    font-family: 'Roboto', sans-serif;
  }
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  align-items: stretch;
`;

class App extends React.Component<{}, {flipped: boolean}> {

  constructor() {
    super();
    this.state = { flipped: false };
  }
  
  render() {
    return (
      <Provider store={store}>
        <AppWrapper
          color1="#404ec1" 
          color2="#14f3eb"
          onClick={() => this.setState({flipped: !this.state.flipped})}
          >
          <FrontPage flipped={this.state.flipped} />
          <ResultPage />
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
