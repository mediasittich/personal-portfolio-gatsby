import React, { useState } from "react"
import Img from "gatsby-image"
import { FiChevronRight } from "react-icons/fi"

import styled from "styled-components"
import { mediaQueries } from "../themes/mediaQueries"

import ProjectModal from "./projectModal"

const Project = ({
  title,
  summary,
  description,
  github,
  url,
  tags,
  screenshot,
}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <CardWrapper>
        <Card className="project-card">
          <CardImgWrapper className="project-card__img">
            <span>
              <Img fluid={screenshot} />
            </span>
            <CardOverlay className="project-card__overlay">
              <div className="project-card__tags">
                {tags.map(tag => (
                  <span key={tag.id}>#{tag.name}</span>
                ))}
              </div>
              <h2 className="project-card__title">{title}</h2>
              <p className="project-card__summary">{summary}</p>
              <button className="project-card__read_more" onClick={handleShow}>
                Read More <FiChevronRight />
              </button>
            </CardOverlay>
          </CardImgWrapper>

          <CardBody className="project-card__body">
            <div className="project-card__tags">
              {tags.map(tag => (
                <span key={tag.id}>#{tag.name}</span>
              ))}
            </div>
            <h2 className="project-card__title">{title}</h2>
          </CardBody>
        </Card>
      </CardWrapper>
      <ProjectModal show={show} handleClose={handleClose} />
    </>
  )
}

const CardWrapper = styled.article`
  margin-bottom: 50px;
  padding: 0;
  flex: 0 0 100%;
  max-width: 100%;
`

const Card = styled.div`
  cursor: pointer;
`

const CardImgWrapper = styled.div`
  margin-bottom: 15px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    background-color: ${props => props.theme.colors.gray};
    bottom: 0;
    left: 10%;
    filter: blur(15px);
  }

  &:hover > .project-card__overlay {
    display: block;
    opacity: 1;
  }
`

const CardBody = styled.div`
  display: none;

  ${mediaQueries("md")`
    display: block;
  `};

  & > .project-card__tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 15px;

    & > span {
      font-size: 13px;
      margin-right: 25px;
      display: block;
      font-weight: 400;
      color: ${props => props.theme.colors.primary};
    }
  }
  & > .project-card__title {
    font-family: ${props => props.theme.fonts.main};
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.theme.colors.grayDark};
    line-height: 1.53;
    margin-bottom: 10px;
  }
`

const CardOverlay = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  bottom: 15px;
  left: 15px;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  opacity: 1;
  z-index: 2;
  transition: ${props => props.theme.transforms.transitionLong};

  ${mediaQueries("md")`
    opacity: 0;
  `};

  ${mediaQueries("lg")`
    width: calc(100% - 40px);
    bottom: 20px;
    left: 20px;
  `};

  ${mediaQueries("xl")`
    width: calc(100% - 50px);
    bottom: 25px;
    left: 25px;
  `};

  & > .project-card__tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 12px;

    ${mediaQueries("md")`
      display: none;
    `};

    & > span {
      font-size: 13px;
      margin-right: 15px;
      display: block;
      font-weight: 400;
      color: ${props => props.theme.colors.primary};
    }
  }
  & > .project-card__title {
    display: block;
    font-family: ${props => props.theme.fonts.highlight};
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.colors.grayDark};
    line-height: 1.53;
    margin-bottom: 10px;

    ${mediaQueries("md")`
      display: none;
    `};
  }
  & > .project-card__summary {
    display: none;
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors.grayDark};
    line-height: 2;
    margin: 0 0 1.7em;
    margin-bottom: 0;

    ${mediaQueries("md")`
      display: block;
      margin-bottom: 30px;
    `};
  }
  & > .project-card__read_more {
    display: inline-flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 14px;
    line-height: 1;
    color: ${props => props.theme.colors.gray};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.grayDark};
      text-decoration: underline;
    }

    & > svg {
      margin-left: 5px;
      font-size: 16px;
      margin-top: 1px;
    }
  }
`

export default Project
