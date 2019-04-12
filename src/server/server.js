const express = require('express')
const app = express()
const path = require('path')

const ROOT_DIR = path.resolve(__dirname)
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const SERVER_DIR = resolvePath('src/server')
const SERVER_DIST_DIR = resolvePath('src/server/dist')
const WEB_DIR = path.join(ROOT_DIR, '../../../src/web')

app.get('/', (req, res) => {
  res.sendFile(path.join(WEB_DIR, 'index.html'))
})

app.listen(3000, () => {
  console.log('Unir app listening on port 3000.')
})