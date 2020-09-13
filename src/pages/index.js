import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroSection from "../components/hero"
import ProjectsList from "../components/projects"
import Footer from "../components/footer"
import ScrollToTopBtn from "../components/scrollToTopBtn"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <HeroSection />
      <ProjectsList />
      <Footer />
      <ScrollToTopBtn />
    </Layout>
  )
}
