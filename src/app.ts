import { serve } from 'https://deno.land/std/http/mod.ts'

function reqHandler(req: Request) {
  return new Response('Hello world')
}

serve(reqHandler, { port: 8000 })
