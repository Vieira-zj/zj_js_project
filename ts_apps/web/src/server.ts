import fastify from 'fastify'
import cors from '@fastify/cors'

import { port } from './config'
import { SayMessage } from './model'

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
    methods: 'GET,PUT,POST,DELETE,PATCH,HEAD,CONNECT,OPTIONS',
    credentials: true,
  })

  // router

  server.get('/', (_, resp) => {
    resp.redirect(307, '/healthz')
  })

  server.get('/healthz', (_, resp) => {
    resp.send('pass')
  })

  server.post('/test/say', (req, resp) => {
    let body = req.body as SayMessage
    let name: string = (body.name || 'default')
    console.log(`from ${name}, get message: ${body.msg}`)
    resp.send(JSON.stringify({ "code": 0 }))
  })

  await server.listen({ port: port as number })
  console.info(`server listening at ${port}`)
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
