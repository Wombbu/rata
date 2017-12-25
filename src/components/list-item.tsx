import styled from 'styled-components';

export const InfoBox = styled.div`
  padding: 10px 10px 10px 10px;
  border-top: 1px solid rgba(255,255,255,0.4);
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  min-height: 80px;

  &:hover {
    background-color: rgba(255,255,255,0.3);
    cursor: pointer;
  }
`;