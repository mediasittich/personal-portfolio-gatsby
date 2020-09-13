import React from "react"
import { FiArrowUp } from "react-icons/fi"
import styled from "styled-components"

const ScrollToTopBtn = () => {
  return (
    <BtnContainer>
      <ButtonWrapper>
        <FiArrowUp />
      </ButtonWrapper>
    </BtnContainer>
  )
}

const BtnContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 20px;
  opacity: 1;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  box-shadow: ${props => props.theme.shadows.boxShadowTooltip};
  cursor: pointer;

  & > svg {
    font-size: 20px;
  }
`

export default ScrollToTopBtn
