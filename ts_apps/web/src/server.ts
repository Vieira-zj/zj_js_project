import path from 'path'
import fastify from 'fastify'
import cors from '@fastify/cors'
import fstatic from '@fastify/static'

import { port } from './config'
import defaultGroup from './router'
import testGroup from './router/test'

async function httpServe() {
  const server = fastify()

  // middlewares

  server.addContentTypeParser(
    ['*', 'application/json'],
    { parseAs: 'string' },
    (_, body, done) => {
      try {
        done(null, JSON.parse(body.toString()))
      } catch (err: any) {
        err.statusCode = 400
        done(err, undefined)
      }
    }
  )

  server.register(cors, {
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
  })

  const pubPath = path.join(__dirname, 'public')
  console.log('set public to:', pubPath)
  server.register(fstatic, {
    root: pubPath,
    prefix: '/public',
  })

  // router

  server.register(defaultGroup)
  server.register(testGroup, { prefix: '/test' })

  await server.listen({ port: port as number })
  console.info(`server listening at ${port} ...`)
}

async function main() {
  try {
    await httpServe()
  } catch (err: any) {
    console.error('http server error:', err)
  }
}

main()

// TODO: add eslint
