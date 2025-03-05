import express from 'express'
import router from './routes/routes.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.options('*', cors())

const PORT = process.env.PORT || 5001

app.use('/', router)

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)
})
