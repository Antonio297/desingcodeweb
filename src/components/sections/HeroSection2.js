import React from "react"
import styled, { keyframes } from "styled-components"
import MockupAnimation2 from "../animations/MockupAnimation2"
import WaveBackground2 from "../backgrounds/WaveBackground2"
import PurchaseButton2 from "../buttons/PurchaseButton2"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection2() {
  return (
    <Wrapper>
      <WaveBackground2 />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Cursos-IK
            <br /> alcanza tus <span>metas</span>
          </Title>
          <Description>
            No esperes más para aprender algo nuevo. Selecciona una opción de
            nuestros cursos y comienza hoy mismo
          </Description>
          <PurchaseButton2 title="¿Necesitas Ayuda?" subtitle="Contactanos" />
        </TextWrapper>
        <MockupAnimation2 />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection2

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    :nth-child(1) {
      animation: ${animation} 1s 0s forwards;
    }
    :nth-child(2) {
      animation: ${animation} 1s 0.4s forwards;
    }
    :nth-child(3) {
      animation: ${animation} 1s 0.6s forwards;
    }
  }
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  @media (max-width: 450px) {
    font-size: 48px;
  }
`
const Description = styled(MediumText)`
  color: ${themes.dark.text1};
`
