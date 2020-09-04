import React from "react"
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa"
import styled from "styled-components"

const DATA = [
  {
    id: 1,
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https:twitter.com",
    name: "Twitter",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https:twitter.com",
    name: "LinkedIn",
  },
  {
    id: 3,
    icon: <FaMedium className="social-icon"></FaMedium>,
    url: "https:twitter.com",
    name: "Medium",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https:twitter.com",
    name: "GitHub",
  },
]

const IconTooltip = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  pointer-events: none;
  color: ${props => props.theme.colors.grayDark};
  font-size: 13px;
  bottom: 90%;
  left: 50%;
  opacity: 0;
  white-space: nowrap;
  visibility: hidden;
  z-index: 10;
  box-shadow: ${props => props.theme.shadows.boxShadowTooltip};
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  transform: translate3d(-50%, 0px, 0px);
  transition: ${props => props.theme.transforms.transitionCubic};

  &::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-top: 6px solid rgb(255, 255, 255);
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
`

const IconListItemLink = styled.a`
  color: ${props => props.theme.colors.grayDark};
  font-size: 22px;
  display: block;
  padding: 0.2em;

  &:hover {
    color: ${props => props.theme.colors.grayDark};
  }

  & > svg {
    display: block;
  }
`

const IconListItem = styled.li`
  position: relative;
  margin-right: 20px;
  list-style: none;

  &:hover ${IconTooltip} {
    opacity: 1;
    visibility: visible;
    bottom: calc(100% + 5px);
  }
`

const IconList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const LINKS = DATA.map(link => {
  return (
    <IconListItem key={link.id}>
      <IconListItemLink href={link.url} className="social-link">
        {link.icon}
      </IconListItemLink>
      <IconTooltip>{link.name}</IconTooltip>
    </IconListItem>
  )
})

export default ({ styleClass }) => {
  return (
    <IconList className={`social-links ${styleClass ? styleClass : ""}`}>
      {LINKS}
    </IconList>
  )
}
