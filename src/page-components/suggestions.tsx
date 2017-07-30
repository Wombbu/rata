import * as React from 'react';
import styled from 'styled-components';
import { CustomSizeText } from '../components/text';

const StyledListItem = CustomSizeText.extend`
  border-bottom: 1px solid rgba(255,255,255,0.5);
  text-align: center;
  padding: 0.6em;
  box-sizing: border-box;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: rgba(255,255,255,0.4)
  }
`
/**
 * A suggestion list item
 * 
 * Is a class because react-flex-move requires the animated components to be stateful components with ref
 */
class SuggestionItem extends React.Component<{children?: any, onClick: () => void}, {}> {
  constructor() {
    super();
  }
  render() {
    return <StyledListItem onClick={() => this.props.onClick()} size={1} > {this.props.children} </StyledListItem>
  }
}

// TODO provide this from contructor (find a way to map actions to dispatch function)
export interface SuggestionData {
  searchStr: string;
  action: () => void;
}

interface SuggestionsProps {
  searchStr: string;
  searchItems: SuggestionData[];
}

// TODO refactor to functional component if state not needed
interface SuggestionsState {

}

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: 1s all;
  height: 114px;
`;

export class Suggestions extends React.Component<SuggestionsProps, SuggestionsState> {
  constructor() {
    super();
  }

  render() {
    return (
        <SuggestionsContainer>
          {this.props.searchItems
          .filter(item => item.searchStr.toLowerCase().includes(this.props.searchStr.toLowerCase()))
          .slice(0,3)
          .map(item =>
            <SuggestionItem onClick={() => console.log('clicked search item')} key={item.searchStr}> 
              {item.searchStr} 
            </SuggestionItem>)
          }
        </SuggestionsContainer>
    )
  }
}

