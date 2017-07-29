import styled from 'styled-components';

export const SearchField = styled.input`
  background: transparent;
  color: white;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 1px; 
  font-size: 1.1em;
  height: 2em;
  padding-left: 1em;
  font-weight: 100;
  padding: 0px;
  margin: 0px;
  text-align: center;

  ::-webkit-input-placeholder {
    color: rgba(255,255,255,0.6);
  }
  ::-moz-placeholder {
    color: rgba(255,255,255,0.6);
  }
  :-ms-input-placeholder {
    color: rgba(255,255,255,0.6);
  }
  :-moz-placeholder {
    color: rgba(255,255,255,0.6);
  }
  
  transition: all 0.15s;
  transition-property: color, background;
`;
