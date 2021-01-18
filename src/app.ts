import express, { Application, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import friendRoutes from './routes/friend'

dotenv.config({ path: './.env' })

mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ DB connection successful!'))
  .catch(() => console.log('❌ DB connection error!'))


const app: Application = express()

app.use(cors())
app.options('*', cors())
app.use('/api/v1/friends', friendRoutes)

app.get('/ping', (req: Request, res: Response) => {
  res.status(200).send('pong')
})

app.listen(5000, () => {
  console.log(`🚀 Server is running on port 5000`)
})
