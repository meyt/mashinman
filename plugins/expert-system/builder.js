const path = require('path')
const fs = require('fs')
const jsYaml = require('js-yaml')

const getFiles = function (path, files) {
  fs.readdirSync(path).forEach(function (file) {
    var subpath = path + '/' + file
    if (fs.lstatSync(subpath).isDirectory()) {
      getFiles(subpath, files)
    } else {
      files.push(path + '/' + file)
    }
  })
}

module.exports = {
  currentDir: null,
  knowledgeBaseDir: null,
  baseDir: null,
  outputPath: null,
  resources: {},
  build (knowledgeBaseDir = null, outputPath = null) {
    // read index file
    // convert index file to json
    this.currentDir = __dirname
    this.knowledgeBaseDir = knowledgeBaseDir || path.resolve(this.currentDir, 'knowledge-base')
    this.outputPath = outputPath || path.resolve(this.currentDir, 'knowledgebase.json')
    this.resources.root = this.getResource(this.translatePath('index.yml'))
    this.loadResources()
    this.writeFile(this.outputPath, JSON.stringify(this.resources))
    return this
  },
  translatePath (path_ = '') {
    return path.join(this.knowledgeBaseDir, path_)
  },
  readFile (path_) {
    return fs.readFileSync(path_, 'utf8')
  },
  writeFile (path_, content) {
    return fs.writeFileSync(path_, content)
  },
  yaml2json (inputString) {
    return jsYaml.safeLoad(inputString)
  },
  getResource (path_) {
    return this.yaml2json(
      this.readFile(path_)
    )
  },
  loadResources () {
    const files = []
    getFiles(this.translatePath(), files)
    files.forEach(file => {
      const fileAlias = file.replace(this.knowledgeBaseDir, '~')
      this.resources[fileAlias] = this.getResource(file)
    })
  }
}
