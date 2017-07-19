import styled from 'styled-components';
const Page = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

interface GradientProps {
    color1: string;
    color2: string;
}

export const GradientPage = Page.extend`
    background: linear-gradient(36deg, ${(props: GradientProps) => props.color1}, ${props => props.color2});
    background-size: 400% 400%;

    -webkit-animation: dynamic-gradient 30s ease infinite;
    -moz-animation: dynamic-gradient 30s ease infinite;
    -o-animation: dynamic-gradient 30s ease infinite;
    animation: dynamic-gradient 30s ease infinite;

    @-webkit-keyframes dynamic-gradient {
        0%{background-position:86% 0%}
        50%{background-position:15% 100%}
        100%{background-position:86% 0%}
    }
    @-moz-keyframes dynamic-gradient {
        0%{background-position:86% 0%}
        50%{background-position:15% 100%}
        100%{background-position:86% 0%}
    }
    @-o-keyframes dynamic-gradient {
        0%{background-position:86% 0%}
        50%{background-position:15% 100%}
        100%{background-position:86% 0%}
    }
    @keyframes dynamic-gradient { 
        0%{background-position:86% 0%}
        50%{background-position:15% 100%}
        100%{background-position:86% 0%}
    }
`;