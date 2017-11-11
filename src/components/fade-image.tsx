import * as React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  transition: opacity 0.8s;
  height: 100%;
  width: auto;

  z-index: 100;
`;

/**
 * Wraps the image to keep the aspect ratio when put inside a container with display: flex
 */
const ImageWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

export default () => 
  <ImageWrapper>
    <LogoImg 
      src="https://lh3.googleusercontent.com/yjXsAg2VZgJPz5NTH30Qejo0EOJChzdKzzQWCn_DMIUOvc5E_AJYX3Vx3oLyG4BA3SxF=w300-rw"
    />
  </ImageWrapper>;