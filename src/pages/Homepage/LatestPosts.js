import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgb(255, 255, 255, 0.9);
  margin-left: 2rem;
  padding: 1rem;
  max-width: 600px;
`

const LatestPosts = ({ posts }) => {
  return (
    <Wrapper className="latest-posts">
      <h2>Latest posts</h2>
      {posts &&
        posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      <Link to="/blog">All posts</Link>
    </Wrapper>
  )
}

export default LatestPosts
