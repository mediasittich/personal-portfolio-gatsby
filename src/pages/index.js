import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ProjectsList from "../components/projects"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <h1>Hello world!</h1>
      <ProjectsList />
    </Layout>
  )
}
