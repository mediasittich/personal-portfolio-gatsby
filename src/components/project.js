import React from "react"
import Img from "gatsby-image"

const Project = ({ title, description, github, url, tags, screenshot }) => {
  return (
    <article className="project card">
      <div className="project-card">
        <div className="project-img">
          <span>
            <Img fluid={screenshot} />
          </span>
        </div>
        <div className="project-title py-4">
          <h4 className="text-uppercase">{title}</h4>
          {tags.map(tag => (
            <span key={tag.id} className="text-secondary">
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default Project
