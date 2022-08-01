import { MongoClient } from 'https://deno.land/x/mongo@v0.31.0/mod.ts'

const client = new MongoClient()

await client.connect('mongodb://127.0.0.1:27017')

const db = client.database('denotest')

interface UserSchema {
  _id: string
  firstname: string
  lastname: string
}

const users = db.collection<UserSchema>('user')

const insertId = await users.insertOne({
  _id: crypto.randomUUID(),
  firstname: 'Hans',
  lastname: 'Larsen'
})

const user = await users.findOne({
  _id: insertId
})

console.log(user)

const userdocs = await users.find().toArray()

for (const user of userdocs) {
  await users.deleteOne({ _id: user._id })
}

const count = await users.countDocuments()

if (count) {
  console.log('OOPS! Not all were deleted.')
} else {
  console.log('They were deleted.')
}
