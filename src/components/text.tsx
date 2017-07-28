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

export const Text = BaseText.extend`
  font-size: 1em;
`;

export const Title = BaseText.extend`
  font-size: 4em;
  opacity: 0.3;
`;

export const SubTitle = BaseText.extend`
  font-size: 3em;
`;