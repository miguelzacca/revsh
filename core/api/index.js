'use strict'

const http = require('node:http')
const { router } = require('./router')

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Content-Type', 'application/json')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://backdoor-http7.netlify.app',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, ngrok-skip-browser-warning',
  )

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  router(req, res)
})

server.listen(4444)
