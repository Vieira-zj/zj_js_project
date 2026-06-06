import * as child_process from "child_process"

export async function shOutput(cmd: string, args: string[], options?: child_process.SpawnOptionsWithoutStdio): Promise<string> {
  let c = child_process.spawn(cmd, args, options)

  const bufs: Uint8Array[] = []
  const errBuf: Uint8Array[] = []

  c.stdout.on('data', (chunk: Uint8Array) => {
    bufs.push(chunk)
  })
  c.stderr.on('data', (chunk: Uint8Array) => {
    errBuf.push(chunk)
  })

  return await new Promise((resolve, reject) => {
    c.on('exit', (code) => {
      if (code === 0) {
        resolve(Buffer.concat(bufs).toString())
        return
      }
      const errMsg = Buffer.concat(errBuf).toString()
      reject(new Error(`exit: ${code}\n${errMsg}`))
    })
  })
}

export async function shRun(cmd: string, args: string[], options?: child_process.SpawnOptionsWithoutStdio) {
  let c = child_process.spawn(cmd, args, options)

  c.stdout.pipe(process.stdout)
  c.stderr.pipe(process.stderr)

  return await new Promise(function (resolve, reject) {
    c.on("exit", (code) => {
      if (code === 0) {
        resolve(undefined)
        return
      }
      reject(new Error(`exit: ${code}`))
    })
  })
}

// Test

async function testSh() {
  let output = await shOutput('ls', ['-l', '/tmp/test'])
  console.log('output:\n', output)
}

testSh()
