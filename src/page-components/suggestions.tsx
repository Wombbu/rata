import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CustomSizeText } from '../components/text';
import { RootState } from '../state';
import { fetchStationData } from '../state/station/actions';
import { SuggestionData } from '../state/suggestions/types';
import { getSuggestionData } from '../state/suggestions/selectors';

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
 * 
 * TODO CONVERT TO A FUNCTION
 */
class SuggestionItem extends React.Component<{children?: any, onClick: () => void}, {}> {
  constructor() {
    super();
  }
  render() {
    return <StyledListItem onClick={() => this.props.onClick()} size={1} > {this.props.children} </StyledListItem>
  }
}

interface SuggestionsProps {
  searchStr: string;
  searchItems: SuggestionData[];
  findStation: (stationShortCode: string, stationName: string) => void;
}

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: 1s all;
  height: 114px;
`;

const Suggestions = (props: SuggestionsProps) => 
  <SuggestionsContainer>
    {props.searchItems
    .filter(item => item.stationName.toLowerCase().includes(props.searchStr.toLowerCase()))
    .slice(0,3)
    .map(item =>
      <SuggestionItem onClick={() => props.findStation(item.stationShortCode, item.stationName)} key={item.stationName}> 
        {item.stationName} 
      </SuggestionItem>)
    }
  </SuggestionsContainer>;

const mapStateToProps = (state: RootState): SuggestionsProps => {
  return {
    searchItems: getSuggestionData(state),
  } as SuggestionsProps;
};

const mapDispatchToProps = (dispatch: any): SuggestionsProps => {
  return {
    findStation: (stationShortCode: string, stationName: string) => {
      dispatch(fetchStationData(stationShortCode, stationName)) 
    }
  } as SuggestionsProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions) as React.ComponentClass<{searchStr: string}>;

