import React from "react"
import { Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import Icon from "../images/undraw_page_not_found_su7k.svg"

import Layout from "../components/layout"
import styled from "styled-components"

const NotFound = () => {
  return (
    <Layout>
      <ErrorPageContainer>
        <Icon width="500" height="400" />
        <h1>Oooops! Something is missing...</h1>
        <p></p>
        <Link to="/">Go back to Homepage</Link>
      </ErrorPageContainer>
    </Layout>
  )
}

const ErrorPageContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default NotFound
