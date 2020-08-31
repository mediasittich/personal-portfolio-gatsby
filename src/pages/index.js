import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/hero"
import ProjectsList from "../components/projects"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <HeroSection />
      <ProjectsList />
    </Layout>
  )
}
