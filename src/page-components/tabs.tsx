import styled from 'styled-components';

export const Tabs = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 300px;
  width: 60%;
  border: 1px solid rgba(255,255,255,0.4);
`

interface TabProps {
  active: boolean;
}

export const Tab = styled.span`
  ${(p: TabProps) => p.active ? 'background-color: rgba(255,255,255,0.3);' : ''}
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
    background-color: ${(p: TabProps) => p.active ? 'rgba(255,255,255,0.4);' : 'rgba(255,255,255,0.15);'}
  }
  &:active {
    background-color: rgba(255,255,255,0.6);
  }
`;

export const TabDivider = styled.span`
  width: 1px;
  align-self: stretch;
  background-color: rgba(255,255,255,0.5);
  display: block;
`