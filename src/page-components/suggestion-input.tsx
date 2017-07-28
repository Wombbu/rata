import * as React from 'react';
import styled from 'styled-components';
import { Text } from '../components/text';
import { Suggestions } from './suggestions';
import { SearchField } from '../components/inputs';

const InfoText = Text.extend`
  padding: 10px 0px 6.18px 0px;
`;

const InfoTextWithBorder = InfoText.extend`
  border-bottom: 1px solid rgba(255,255,255,0.5);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 80%;
  max-width: 300px;
`;

export class SuggestionInput extends React.Component<{}, {}> {
  constructor() {
    super();
  }

  render() {

    return (
      <InputContainer>
        <InfoTextWithBorder size={1}>
            Valitse yleisimmistä 
        </InfoTextWithBorder>
        <Suggestions 
          searchStr="juuh" 
          searchItems={[{searchStr: "juu", action: () => console.log("juuh")}]} 
        />
        <InfoText size={1}>
          tai 
        </InfoText>
        <SearchField 
          type="text" 
          placeholder="kirjoita juna tai asema" 
          onInput={ () => console.log("juuuu kato") }
        />
      </InputContainer>
    )
  }
}