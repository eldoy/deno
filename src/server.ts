import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.body = 'Hello Deno!'
})

app.addEventListener('listen', ({ hostname, port, secure }) => {
  console.log(`Listening on: http://localhost:${port}`)
})

await app.listen({ port: 8000 })
