import { useStaticQuery, graphql } from 'gatsby'

export const useProjects = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )
  return allProjectsJson.edges.map(({ node }) => ({ ...node }))
}
