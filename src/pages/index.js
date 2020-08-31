import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import HeroSection from "../components/hero"
import ProjectsList from "../components/projects"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Navbar />
      <HeroSection />
      <ProjectsList />
      <Footer />
    </Layout>
  )
}
