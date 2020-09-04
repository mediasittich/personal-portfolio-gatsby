import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer>
      <FooterCTA>
        <div>
          <h1>Wanna work on a project together?</h1>
          <h5 className="text-uppercase">Get in touch</h5>
          <SocialLinks />
        </div>
      </FooterCTA>
      <FooterLegal>
        <div className="copyrights text-center">
          <p className="para">Copyright © 2020 | Imprint | GDPR</p>
        </div>
      </FooterLegal>
    </footer>
  )
}

const FooterCTA = styled.div`
  width: calc(100% - 90px);
  margin: 120px auto 0;
  margin-top: 90px;
  padding: 25px;

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 40px;

    & > h1 {
      font-family: ${props => props.theme.fonts.main};
      /* font-size: 21px; */
      margin-bottom: 40px;
      font-weight: 700;
    }

    & > h5 {
      margin-bottom: 30px;
    }

    & > ul {
      margin-left: 20px;
    }
  }
`

const FooterLegal = styled.div`
  position: relative;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
  padding: 30px 15px;
  margin-top: 90px;
  border-top: 1px solid ${props => props.theme.colors.grayBtnLg};
`

export default Footer
