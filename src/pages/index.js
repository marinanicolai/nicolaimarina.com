import React, { useState } from 'react'
import { graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../layouts'
import SEO from '../components/seo'
import Menu from './Homepage/Menu'
import Portfolio from './Homepage/Portfolio'
import Education from './Homepage/Education'
import Contact from './Homepage/Contact'

const IndexPage = () => {
  // const [moveTo, setMoveTo] = useState(null)

  return (
    <Layout>
      <SEO
        description="Marina Nicolai"
        title="Marina Nicolai - personal website"
      />
      <Menu />
      <ReactFullpage
        debug
        menu="#menu"
        anchors={['aboutMe', 'projects', 'education', 'contact']}
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section first">
                  <div className="cta">
                    I am a web developer who fell in love with programming in my
                    free time. I enjoy learning about new technologies and have
                    passion for web development. If I am not in front of my
                    computer, I am spending time with loved ones, or taking bike
                    rides when the weather is nice.
                  </div>
                </div>
                <Portfolio />
                <Education />
                <Contact />
              </ReactFullpage.Wrapper>
            </>
          )
        }}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
