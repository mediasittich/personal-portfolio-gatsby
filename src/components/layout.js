import React from "react"

import Footer from "../components/footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.css"

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
