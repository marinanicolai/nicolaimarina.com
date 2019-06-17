import React from 'react'
import { graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../layouts'
import SEO from '../components/seo'
import Menu from './Homepage/Menu'
import Bio from './Homepage/Bio'
import LatestPosts from './Homepage/LatestPosts'
import Portfolio from './Homepage/Portfolio'
import Education from './Homepage/Education'
import Contact from './Homepage/Contact'

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO
        description="Marina Nicolai"
        title="Marina Nicolai - personal website"
      />
      <Menu />
      <ReactFullpage
        menu="#menu"
        anchors={['aboutMe', 'projects', 'education', 'contact']}
        navigation={true}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section about-me">
                  <Bio />
                  <LatestPosts posts={posts} />
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
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
