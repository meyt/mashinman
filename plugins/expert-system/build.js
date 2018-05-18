const path = require('path')
const builder = require('./builder.js')

builder.build(
  path.resolve(__dirname, '../../knowledge-base'),
  path.resolve(__dirname, '../../static/knowledgebase.json')
)
