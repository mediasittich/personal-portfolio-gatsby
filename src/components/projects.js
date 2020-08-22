import React, { useState } from "react"

import { DATA } from "../constants/data"
import { createFilterMap } from "../constants/functions"

import FilterButton from "../components/filterButton"
import Project from "../components/project"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const FILTER_MAP = createFilterMap(DATA)
  const FILTER_NAMES = Object.keys(FILTER_MAP)

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const projectList = DATA.filter(FILTER_MAP[filter]).map(project => (
    <Project key={project.id} title={project.title} tags={project.tags} />
  ))
  return (
    <section className="project-area">
      <div className="container">
        <div className="pb-5">
          <h1 className="text-uppercase">List of Projects</h1>
        </div>
        <div className="button-group">{filterList}</div>
        <div className="row">{projectList}</div>
      </div>
    </section>
  )
}

export default Projects
