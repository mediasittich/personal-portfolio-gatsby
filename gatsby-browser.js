import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
* {
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    font-family: ${props => props.theme.fonts.main};
    margin: 0;
    padding: 0;
    font-size: 15px;
    overflow-x: hidden;
    height: 100%;
}

a,
a:hover,
a:active {
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0px;
    font-family: ${props => props.theme.fonts.highlight};
}
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
