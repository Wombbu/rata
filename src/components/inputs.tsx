import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  margin: 5px;
`;

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
    color: rgba(255,255,255,0.7);
  }
  ::-moz-placeholder {
    color: rgba(255,255,255,0.7);
  }
  :-ms-input-placeholder {
    color: rgba(255,255,255,0.7);
  }
  :-moz-placeholder {
    color: rgba(255,255,255,0.7);
  }
  
  transition: all 0.15s;
  transition-property: color, background;
`

export const SearchButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
	border-radius: 2px;
	width: 6em;
  height: 2em;
  min-height: 2em;
	background: transparent;
	color: rgba(255,255,255,0.6);
  border: 1px solid rgba(255, 255, 255, 0.5);
  align-self: flex-end;
  text-align: center;
  font-weight: lighter;
  cursor: pointer;

  &:hover {
    background-color: rgba(255,255,255,0.5);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background-color: rgba(255,255,255,0.8);
  }
  transition: all 0.15s;
  transition-property: color, background;
`;

export const SearchInput = styled.input`
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, .5);;
  border-radius: 2px;
  font-size: 1em;
  height: 2em;
  min-height: 2em;
  margin-bottom: 10px;
  padding-left: 0.8em;
  font-weight: lighter;

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