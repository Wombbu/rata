import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { CustomSizeText } from '../components/text';
import { RootState } from '../state';
import { fetchStationData } from '../state/station/actions';

const tempSearchItems: SuggestionData[] = [
  ({searchStr: 'Helsingin asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'IC 50', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Tampereen asema', stationShortCode: "TPE"} as SuggestionData),
  ({searchStr: 'Seinäjoen asema', stationShortCode: "SEI"} as SuggestionData),
  ({searchStr: 'Lapuan asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Rovaniemen asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Pietarsaaren asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Kokkolan asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Jyväskylän asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Turun asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'IC 41', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'IC 60', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Härmän asema', stationShortCode: "HKI"} as SuggestionData),
  ({searchStr: 'Sipoon asema', stationShortCode: "HKI"} as SuggestionData),
]

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
  stationShortCode: string;
}

interface SuggestionsProps {
  searchStr: string;
  searchItems: SuggestionData[];
  findStation: (stationShortCode: string) => void;
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
    .filter(item => item.searchStr.toLowerCase().includes(props.searchStr.toLowerCase()))
    .slice(0,3)
    .map(item =>
      <SuggestionItem onClick={() => props.findStation(item.stationShortCode)} key={item.searchStr}> 
        {item.searchStr} 
      </SuggestionItem>)
    }
  </SuggestionsContainer>;

const mapStateToProps = (state: RootState): SuggestionsProps => {
  return {
    searchItems: tempSearchItems,
  } as SuggestionsProps;
};

const mapDispatchToProps = (dispatch: any): SuggestionsProps => {
  return {
    findStation: (stationShortCode: string) => {
      dispatch(fetchStationData(stationShortCode)) 
    }
  } as SuggestionsProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions) as React.ComponentClass<{searchStr: string}>;

