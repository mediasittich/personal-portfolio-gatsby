import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { FaTwitter } from "react-icons/fa"
import SocialLinks from "../constants/socialLinks"
import Icon from "../images/undraw_voice_interface_eckp.svg"

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <Row>
          <HeroText md={12} lg={6}>
            <h1>
              Hey! I'm <b>Regina</b>
            </h1>
            <p>
              Breakfast procuring no end happiness allowance assurance frank.
              Met simplicity nor difficulty unreserved who. Entreaties mr
              conviction dissimilar me astonished estimating cultivated.
            </p>
            <SocialLinks />

            {/* <div>
              <button>Get in touch</button>
            </div> */}
          </HeroText>
          <HeroImg md={12} lg={6}>
            <Icon width="400" height="400" />
          </HeroImg>
        </Row>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled(Container)`
  /* height: 100vh;
  width: 100vw; */
  padding-top: 80px;
`

const HeroText = styled(Col)`
  max-width: 50%;
  flex: 0 0 50%;
  padding: 20px 20px 20px 0;

  & > h1 {
    font-size: 26px;
    color: ${props => props.theme.colors.grayDark};
    font-weight: 400;
    margin-bottom: 15px;
  }
  & > p {
    font-size: 15px;
    color: ${props => props.theme.colors.grayDark};
    line-height: 2;
    margin: 0 0 1.7em;
  }
`
const HeroImg = styled(Col)`
  height: 100%;
  max-width: 50%;
  overflow: hidden;
  position: relative;
  flex: 0 0 50%;
  /* width: 180px;
  height: 180px; */
  margin: 0 auto;
  margin-bottom: 20px;
  /* border-radius: 50%; */
  /* border: 1px solid ${props => props.theme.colors.grayLight}; */
  display: flex;

  & > svg {
    /* border-radius: 50%; */
    /* box-shadow: ${props => props.theme.shadows.boxShadow}; */
    width: 100%;
    height: 100%;
  }
`

export default Hero
