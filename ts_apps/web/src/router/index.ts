import { FastifyInstance } from 'fastify'

export default (server: FastifyInstance, _: any, done: any) => {
  // default
  server.get('/', (_, resp) => {
    resp.redirect(307, '/healthz')
  })

  // health check
  server.get('/healthz', (_, resp) => {
    resp.send('pass')
  })

  done()
}
