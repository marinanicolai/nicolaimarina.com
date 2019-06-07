import React from 'react'

const content = [
  {
    title: 'corporate',
    description: 'description',
    url: 'https://github.com/marinanicolai/corporate',
  },
  {
    title: 'recipe',
    description: 'description',
    url: 'https://github.com/marinanicolai/twentynineteen-recipe',
  },
]

const Portfolio = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects">
        {content.map(({ title }) => (
          <div className="project">{title}</div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
