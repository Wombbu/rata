import styled from 'styled-components';

export const LoadingIndicator = styled.div`
  border-radius: 50%;
  flex: 1;
  animation: color-change 5s infinite alternate;
  opacity: 0.5;
  background-color: white;
  margin: 50px;

  @keyframes color-change {
    0% { background-color: #FF00CC; }
    20% { background-color: #6E0DD0; }
    40% { background-color: #FF3300; }
    60% { background-color: #FF00CC; }
    80% { background-color: #6E0DD0; }
    100% { background-color: #FF3300; }
  }
`;