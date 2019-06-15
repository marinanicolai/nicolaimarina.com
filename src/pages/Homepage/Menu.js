import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

const Nav = styled.ul`
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255, 0.7);
`

const Menu = ({ moveTo }) => (
  <Nav id="menu">
    <li data-menuanchor="aboutMe">
      <a href="#aboutMe">Marina Nicolai</a>
    </li>
    <li data-menuanchor="projects">
      <a href="#projects">Projects</a>
    </li>
    <li data-menuanchor="education">
      <a href="#education">Education</a>
    </li>
    <li data-menuanchor="contact">
      <a href="#contact">Contact</a>
    </li>
  </Nav>
)

export default Menu
