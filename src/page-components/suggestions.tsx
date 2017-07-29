import * as React from 'react';
import styled from 'styled-components';
import * as FlipMove from 'react-flip-move';
import { CustomSizeText } from '../components/text';

const StyledListItem = CustomSizeText.extend`
  border-bottom: 1px solid rgba(255,255,255,0.5);
  text-align: center;
  padding: 0.6em;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: rgba(255,255,255,0.4)
  }
`

class SuggestionItem extends React.Component<{children?: any, onClick: () => void}, {}> {
  constructor() {
    super();
  }
  render() {
    return <StyledListItem onClick={() => this.props.onClick()} size={1} > {this.props.children} </StyledListItem>
  }
}

// TODO provide this from contructor (find a way to map actions to dispatch function)
interface SuggestionData {
  searchStr: string;
  action: () => void;
}

interface SuggestionsProps {
  searchStr: string;
  searchItems: SuggestionData[];
}

// TODO refactor to functional component if state not needed
interface SuggestionsState {
  searchItems: SuggestionData[];
}

const SuggestionsContainer = styled(FlipMove)`
  display: flex; 
  flex-direction: column;
`;

export class Suggestions extends React.Component<SuggestionsProps, SuggestionsState> {
  constructor() {
    super();
    this.state = {searchItems: [
      ({searchStr: 'Helsingin asema', action: () => this.shuffle()} as SuggestionData),
      ({searchStr: 'IC 50', action: () => this.shuffle()} as SuggestionData),
      ({searchStr: 'Tampereen asema', action: () => this.shuffle()} as SuggestionData),
    ]};
  }

  shuffle() {
    const shuffle = (a: any[]) => {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }

    let a: SuggestionData[] = this.state.searchItems;

    shuffle(a);

    this.setState({
      searchItems: a,
    })
  }

  render() {

    return (
        <SuggestionsContainer 
          duration={300} 
          easing="ease-in-out"
          staggerDelayBy={50}
          staggerDurationBy={50}  
        >
          {this.state.searchItems.map(item =>
            <SuggestionItem onClick={() => this.shuffle()} key={item.searchStr}> 
              {item.searchStr} 
            </SuggestionItem>)
          }
        </SuggestionsContainer>
    )
  }
}

