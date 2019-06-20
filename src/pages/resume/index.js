import React, { useState } from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons' // more here: https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' // more here: https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-brands-svg-icons

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { useProjects } from '../../hooks/useProjects'

import PrintAndDownload from './PrintAndDownload'

const Resume = () => {
  const projects = useProjects()

  return (
    <Layout>
      <SEO
        title="Marina Nicolai - Resume"
        description="The second page, of course!"
      />

      <PrintAndDownload />

      <div className="resume">
        <div id="contact-info" className="vcard">
          <h1 className="fn">Marina Nicolai</h1>

          <div className="fa-icons-wrapper">
            <a
              className="fa"
              target="_blank"
              href="https://www.linkedin.com/in/marina-nicolai-b627b1128/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="fa"
              target="_blank"
              href="https://github.com/marinanicolai"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <p>
            <FontAwesomeIcon icon={faMobileAlt} className="mr-1" />{' '}
            <span className="tel">540-322-7213</span>
            <br />
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            <a className="email" href="mailto:nicolaimarina@gmail.com">
              nicolaimarina@gmail.com
            </a>
          </p>
        </div>

        <div className="clear" />

        <dl>
          <dd className="clear" />

          <dt>Education</dt>
          <dd>
            <p>
              April 2019: <strong>CompTia Security+ Certification</strong>
              <p>
                In the process of learning JS I noticed multiple times
                “security” being mentioned. I was curious on how to protect my
                data. I took a short break from developing journey and educated
                myself to fill security gap knowledge. Having that info I can
                learn and code in JS avoiding vulnerabilities of data breaches.
              </p>
            </p>
            <p>
              2019: <strong>front-end development courses</strong> on lynda.com
              and teamtreehouse.com
            </p>
            <p>
              2018: <strong>front-end development courses</strong> on lynda.com{' '}
            </p>
            <p>2017: courses on lynda.com</p>
            <p>2016: courses on codeacademy.com</p>
            <p>
              2009: Northern Virginia Community College - took some computer
              science classes
            </p>
          </dd>

          <dd className="clear" />

          <dt>Skills</dt>
          <dd>
            <h2>Tech skills</h2>
            <p>
              JQuery, HTML, HTML5, CSS, CSS3, cross-browser compatibility, Web
              User Interface Design (UI), Security Principles.
            </p>
            <h2>Soft skills</h2>
            <p>Teamwork, Proactive Communication</p>
          </dd>

          <dd className="clear" />

          <dt>Experience</dt>
          {/* {projects.map(({ name, technologies }, index) => (
            <dd key={index}>
              <h2>
                {`${name} - `}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nicolaimarina.com/"
                >
                  link
                </a>
              </h2>
              <h3>Built using:</h3>
              <ul>
                {technologies.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </dd>
          ))} */}

          <dd>
            <h2>
              Personal website -{' '}
              <a target="_blank" href="https://nicolaimarina.com/">
                nicolaimarina.com
              </a>
              <span>October 2018 to March 2019</span>
            </h2>
            <h3>Build using</h3>
            <ul>
              <li>Build using the HTMLS, CSS3, SASS.</li>
              <li>
                Developed for personal use and provides links to projects
                created the past few months.
              </li>
            </ul>

            <h2>
              Recipe WordPress theme -{' '}
              <a
                target="_blank"
                href="https://github.com/marinanicolai/twentynineteen-recipe"
              >
                github URL
              </a>
            </h2>
            <ul>
              <li>
                Created a custom-made theme for recipes, based on twentynineteen
                core theme
              </li>
              <li>Build using the WordPress, HTMLS, CSS3, SASS.</li>
            </ul>
          </dd>

          <dd className="clear" />
        </dl>

        <div className="clear" />
      </div>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  )
}

export default Resume
