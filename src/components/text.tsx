import styled from 'styled-components';

export const BaseText = styled.span`
  color: white;
  font-weight: 100;
  opacity: 0.6;
`;

/**
 * Use for experimenting with text size while developing
 */
export const CustomSizeText = BaseText.extend`
  font-size: ${(props: {size: number}) => props.size }em;
`;

export const TempList = CustomSizeText.extend`
  border-bottom: 1px solid rgba(255,255,255,0.5);
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: rgba(255,255,255,0.4)
  }
`

export const Text = BaseText.extend`
  font-size: 1em;
`;

export const Title = BaseText.extend`
  font-size: 4em;
  opacity: 0.3;
  padding-bottom: 3vh;
`;

export const SubTitle = BaseText.extend`
  font-size: 3em;
`;