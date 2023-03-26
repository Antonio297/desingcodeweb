import React from "react"
import styled from "styled-components"

export default function MockupAnimation2() {
  return (
    <Wrapper>
      <div className="mockup3" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }

  div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover div {
    transform: rotateX(0deg) rotateY(0deg);
    &.mockup3 {
      transition-delay: 0s;
    }
    :hover {
      filter: brightness(100%) saturate(100%);
    }
  }

  .mockup3 {
    position: absolute;
    width: 800px;
    height: 500px;
    left: 37px;
    top: -30px;

    background: url("/images/animations/SignUp.svg");
    border: 0.342305px solid rgba(23, 12, 61, 0);
    backdrop-filter: blur(13.6922px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
`
