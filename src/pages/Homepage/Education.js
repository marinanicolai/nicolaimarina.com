import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { useProjects } from '../../hooks/useProjects'

const Title = styled.h1`
  color: black;
  margin-bottom: 5rem;
  text-align: center;
`
const Paragraph = styled.p`
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.6);
  max-width: 500px;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  margin-left: 3rem;
`

const Portfolio = () => {
  const projects = useProjects()

  return (
    <div className="section education">
      <Title>Education</Title>
      <Paragraph>
        Learing in IT is an ongoing process, these are some of my resources
        which I use to improve my skills
      </Paragraph>
      <ul>UDEMY CODEACADEMY LYNDA.COM TREEHOUSE</ul>
    </div>
  )
}

export default Portfolio
