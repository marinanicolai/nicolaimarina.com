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

const Contact = () => {
  return (
    <div className="section contact">
      <div class="contact-info">
        <div class="info">
          <i class="fas fa-envelope fa-2x" />
          <h3>Email</h3>
          <p>nicolaimarina@gmail.com</p>
        </div>
        <div class="info">
          <i class="fas fa-address-card fa-2x" />
          <h3>Address</h3>
          <p>Fredericksburg VA</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
