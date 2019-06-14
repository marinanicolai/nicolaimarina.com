import React from 'react'
import { useProjects } from '../hooks/useProjects'

const Projects = () => {
  const projects = useProjects()

  return projects.map(({ name }, index) => <li key={index}>{name}</li>)
}

export default Projects
