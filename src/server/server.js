const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const ROOT_DIR = path.resolve(__dirname)
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args)
const SERVER_DIR = resolvePath('src/server')
const SERVER_DIST_DIR = resolvePath('src/server/dist')
const WEB_DIR = path.join(ROOT_DIR, '../../../src/web')

const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(express.static(WEB_DIR))

app.get('/', (req, res) => {
  res.sendFile(path.join(WEB_DIR, 'index.html'))
})

app.listen(port, () => {
  console.log(`Unir app listening on port ${port}.`)
})