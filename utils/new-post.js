const fs = require('fs-extra')
const path = require('path')
const inquirer = require('inquirer')
const moment = require('moment')
const { error, success } = require('log-symbols')
const { green, red } = require('chalk')
const _ = require('lodash')
const dedent = require('dedent')

const newGatsbyPost = title => {
  if (!title) throw new Error('`title` is required!')

  const formattedDate = moment().format('YYYY-MM-DD')
  const titleToPathname = _.trim(title)
    .replace(/\s+/g, '-')
    .toLowerCase()
  const pathToPost = path.normalize(`blog/${titleToPathname}/index.md`)
  const content = dedent`
  ---
  title: "${_.trim(title)}"
  date: "${formattedDate}"
  ---\n
`

  return fs
    .outputFile(pathToPost, content)
    .then(() => path.resolve(pathToPost))
    .catch(console.error)
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title:',
      validate: x => (x.length > 0 ? true : '`Title` is required'),
    },
  ])
  .then(answers => newGatsbyPost(answers.title))
  .then(path => {
    console.log()
    console.log(success, green('Created:'))
    console.log(path)
  })
  .catch(err => {
    console.log()
    console.log(error, red(err))
  })
