import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgb(255, 255, 255, 0.9);
  color: black;
  font-size: 22px;
  font-weight: 100;
  line-height: 1.5;
  max-width: 600px;
  margin: 2rem;
  padding: 1rem;
`

const Bio = () => (
  <Wrapper>
    I am a web developer who fell in love with programming in my free time. I
    enjoy learning about new technologies and have passion for web development.
  </Wrapper>
)

export default Bio
