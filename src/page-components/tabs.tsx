import styled from 'styled-components';

export const Tabs = styled.div`
  padding-top: 2vh;
  padding-bottom: 2vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 300px;
  width: 60%;
`

export const Tab = styled.span`
  color: white;
  text-align: center;
  font-weight: 100;
  font-size: 1.1em;
  opacity: 0.6;
  margin: 0px;
  flex: 1;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
  &:hover {
    text-shadow: 0px 0px 2px rgba(0,0,0,0.8);
  }
`;

export const TabDivider = styled.span`
  width: 1px;
  align-self: stretch;
  background-color: rgba(255,255,255,0.5);
  display: block;
`