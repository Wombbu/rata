import * as React from 'react';
import styled from 'styled-components';

const TrainListWrapper = styled.div`
  overflow: scroll;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 500px;
  margin-bottom: 3vh;
  border-bottom: 1px solid rgba(255,255,255,0.4);
`;

export default class SmartScrollResultList extends React.Component<{children: any}, {ref?: Element}> {
  constructor() {
    super();
    this.state = {ref: undefined};
  }

  render() {
    return (
      <TrainListWrapper
            innerRef={(ref: Element) => {
              if (!this.state.ref) {
                this.setState({ref})
              }
            }}
            onWheel={e => {
              if (!this.state.ref) {
                return;
              }
              // Scroll document to bottom before scrolling this element
              if (!((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
                e.preventDefault();
                window.scrollBy(e.deltaX, e.deltaY);
              }
            }}
      >
          {this.props.children}
      </TrainListWrapper>
    );
  }
}
