import { FastifyRequest, FastifyReply } from 'fastify'

import { env } from '../config'

function fail(msg: string): any {
  return { code: 99, msg: msg }
}

export default async (req: FastifyRequest, reply: FastifyReply) => {
  if (env === 'dev') {
    console.log('skip auth check')
    return
  }

  console.debug('auth check')
  if (!req.url?.startsWith('/api/')) {
    reply.send(fail('invalid url'))
    return
  }

  const { cookie: authCookie } = req.headers
  if (!authCookie) {
    reply.send(fail('no cookie'))
  }

  // post to /profile/user to check token, and get user info
}
