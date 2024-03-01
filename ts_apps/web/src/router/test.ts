import { FastifyInstance } from 'fastify'

import { SayMessage } from '../model'

export default (server: FastifyInstance, _: any, done: any) => {
  // post test
  server.post('/say', (req, resp) => {
    let body = req.body as SayMessage
    let name: string = (body.name || 'default')
    console.log(`from ${name}, get message: ${body.msg}`)
    resp.send(JSON.stringify({ "code": 0 }))
  })

  done()
}
