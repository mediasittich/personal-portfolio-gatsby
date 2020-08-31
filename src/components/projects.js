import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Masonry from "react-masonry-css"
import FlipMove from "react-flip-move"

import { createFilterMap } from "../constants/functions"

import FilterButton from "../components/filterButton"
import Project from "../components/project"

import "../styles/projects.css"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const data = useStaticQuery(graphql`
    {
      categories: allStrapiCategory {
        nodes {
          strapiId
          name
        }
      }
      projects: allStrapiProject {
        nodes {
          strapiId
          title
          category {
            id
            name
          }
          description
          github
          url
          createdAt(formatString: "DD MM YYYY")
          screenshot {
            childImageSharp {
              fluid(maxWidth: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tag {
            id
            name
          }
        }
      }
    }
  `)

  const CATEGORIES = data.categories.nodes
  const PROJECTS = data.projects.nodes

  const FILTER_MAP = createFilterMap(CATEGORIES, PROJECTS)
  const FILTER_NAMES = Object.keys(FILTER_MAP)

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
      currentFilter={filter}
    />
  ))

  const projectList = PROJECTS.filter(FILTER_MAP[filter]).map(project => (
    <Project
      key={project.strapiId}
      title={project.title}
      description={project.description}
      github={project.github}
      url={project.url}
      tags={project.tag}
      screenshot={project.screenshot.childImageSharp.fluid}
    />
  ))

  // Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
    576: 1,
  }

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-title pb-5">
          <h1 className="text-uppercase title-h1">List of Projects</h1>
        </div>

        <div className="button-group mb-5">{filterList}</div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {projectList}
        </Masonry>
      </div>
    </section>
  )
}

export default Projects
