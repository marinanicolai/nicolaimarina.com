import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../layouts/index'
import Portfolio from '../components/Portfolio'

import SEO from '../components/seo'

function IndexPage({ data }) {
  const [name, setName] = useState('1234')
  return (
    <Layout>
      <SEO
        description="Gatsby + Hooks: a perfect pairing!"
        title="React Hooks + Gatsby"
      />
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section first">
                <div className="cta">
                  I am a web developer who fell in love with programming in my
                  free time. I enjoy learning about new technologies and have
                  passion for web development. If I am not in front of my
                  computer, I am spending time with loved ones, or taking bike
                  rides when the weather is nice.
                </div>
                {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button> */}
              </div>
              <div className="section second">
                <Portfolio />
              </div>
            </ReactFullpage.Wrapper>
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
