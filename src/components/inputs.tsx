import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 71%;
  max-width: 300px;
  margin: 5px;
`;

export const SearchButton = styled.a`
  display: inline-block;
	border-radius: 2px;
	width: 6rem;
	background: transparent;
	color: white;
  padding: 10px;
	border: 1.5px solid white;
  align-self: flex-end;
  text-align: center;
  &:hover {
    background-color: white;
    color: #404ec1;
  }
  transition: all 0.5s;
  transition-property: color, background;
`;

export const SearchInput = styled.input`
  background: transparent;
  color: white;
  border: 1.5px solid white;
  border-radius: 2px;
  font-size: 120%;
  height: 2rem;
  margin-bottom: 10px;
  padding: 3px;
  padding-left: 6px;
  ::-webkit-input-placeholder {
    color: white;
  }
  ::-moz-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
    color: white;
  }
  :-moz-placeholder {
    color: white;
  }
  
  transition: all 0.5s;
  transition-property: color, background;
`;