import 'https://deno.land/std@0.193.0/dotenv/load.ts';
import AtProtoAPI from '@atproto/api'
const { BskyAgent } = AtProtoAPI

const agent = new BskyAgent({ service: 'https://bsky.social' })

const identifier = Deno.env.get('BSKY_IDENTIFIER') || ''
const password = Deno.env.get('BSKY_PASSWORD') || ''

await agent.login({
    identifier,
    password
  })
  
await agent.post({
  text: 'API を用いた投稿テストです。',
  createdAt: new Date().toISOString()
})