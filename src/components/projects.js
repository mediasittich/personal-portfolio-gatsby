import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { createFilterMap } from "../constants/functions"

import FilterButton from "../components/filterButton"
import Project from "../components/project"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const data = useStaticQuery(graphql`
    {
      categories: allStrapiCategory {
        nodes {
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
    />
  ))

  const projectList = PROJECTS.filter(FILTER_MAP[filter]).map(project => (
    <Project key={project.strapiId} title={project.title} tags={project.tag} />
  ))

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-title pb-5">
          <h1 className="text-uppercase title-h1">List of Projects</h1>
        </div>
        <div className="button-group">{filterList}</div>
        <div className="row grid">{projectList}</div>
      </div>
    </section>
  )
}

export default Projects
