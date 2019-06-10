import React from 'react'
import { useProjects } from '../hooks/useProjects'

const Projects = () => {
  const projects = useProjects()

  console.log('projects', projects)

  return projects.map(({ name }, index) => <li key={index}>{name}</li>)
}

export default Projects
