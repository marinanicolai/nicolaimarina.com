import React from 'react'
import { useProjects } from '../hooks/useProjects'

const Portfolio = () => {
  const projects = useProjects()

  return (
    <div>
      <h2>Projects</h2>
      <div className="projects">
        {projects.map(({ name, description, id }) => (
          <div key={id}>
            <div className="project">{name}</div>
            <div className="project-description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
