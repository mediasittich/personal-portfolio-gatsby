import React from "react"

import Layout from "../components/layout"
import ProjectsList from "../components/projects"

export default function Home() {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <ProjectsList />
    </Layout>
  )
}
