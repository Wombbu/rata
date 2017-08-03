import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../components/text';
import { Suggestions, SuggestionData } from './suggestions';
import { SearchField } from '../components/inputs';

const tempSearchItems: SuggestionData[] = [
  ({searchStr: 'Helsingin asema', action: () => console.log("juuh")} as SuggestionData),
  ({searchStr: 'IC 50', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Tampereen asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Seinäjoen asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Lapuan asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Rovaniemen asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Pietarsaaren asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Kokkolan asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Jyväskylän asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Turun asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'IC 41', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'IC 60', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Härmän asema', action: () =>  console.log("juuh")} as SuggestionData),
  ({searchStr: 'Sipoon asema', action: () =>  console.log("juuh")} as SuggestionData),
]

const InfoText = Text.extend`
  padding: 10px 0px 6.18px 0px;
  font-size: 0.8em;
`;

const InfoTextWithBorder = InfoText.extend`
  border-bottom: 1px solid rgba(255,255,255,0.5);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 68%;
  max-width: 300px;
  min-height: 150px;
`;

export class SuggestionInput extends React.Component<{}, {inputStr: string}> {
  constructor() {
    super();
    this.state = {inputStr: ""}
  }

  render() {
    return (
      <InputContainer>
        <InfoTextWithBorder>
            {this.state.inputStr ? "Valitse ehdotuksista" :  "Valitse yleisimmistä" }
        </InfoTextWithBorder>
        <Suggestions 
          searchStr={this.state.inputStr}
          searchItems={tempSearchItems} 
        />
        <InfoText>
          {this.state.inputStr ? "hakusanalle" : "tai"} 
        </InfoText>
        <SearchField 
          type="text" 
          placeholder="kirjoita juna tai asema" 
          onInput={ (evt: any) => this.setState({inputStr: evt.target.value}) }
        />
      </InputContainer>
    )
  }
}