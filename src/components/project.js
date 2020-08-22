import React from "react"

const Project = ({ id, title, tags }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="project">
        <div className="project-img">img</div>
        <div className="project-title py-4">
          <h4 className="text-uppercase">{title}</h4>
          {tags.map((tag, index) => (
            <span key={index} className="text-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
