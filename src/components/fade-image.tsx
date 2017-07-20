import * as React from "react";
import styled from "styled-components";

const ImageWithFade = styled.img`
  transition: opacity 0.8s;
  opacity: ${(props: {loaded: boolean}) => props.loaded ? '1' : '0'};
  height: 100%; /* to make the image re
`;

/**
 * Wraps the image to keep the aspect ratio when put inside a container with display: flex
 */
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export class FadeImage extends React.Component<{onLoad: () => void}, {loaded: boolean}> {
  constructor() {
    super();
    this.state = { loaded: false };
  }

  render() {
    return (
      <ImageWrapper>
        <ImageWithFade 
          onLoad={() => this.setState({loaded: true})}
          loaded={this.state.loaded}
          src="https://lh3.googleusercontent.com/yjXsAg2VZgJPz5NTH30Qejo0EOJChzdKzzQWCn_DMIUOvc5E_AJYX3Vx3oLyG4BA3SxF=w300-rw"
        />
      </ImageWrapper>
    )
  }
}

export default FadeImage;