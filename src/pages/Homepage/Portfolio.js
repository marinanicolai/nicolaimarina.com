import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { useProjects } from '../../hooks/useProjects'

const Title = styled.h1`
  color: white;
  text-align: center;
`
const Anchor = styled.a`
  margin: 0 1rem;
`

const Portfolio = () => {
  const projects = useProjects()

  return (
    <div className="section second">
      <Title>My Projects</Title>
      <div className="projects">
        {projects.map(({ name, description, url, id }) => (
          <div key={id} className="project">
            <span>{name}</span>
            <Anchor href={url} target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} inverse />
            </Anchor>

            <div className="project-description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
