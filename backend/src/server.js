import 'dotenv/config'
import app from './app.js'

const port = process.env.PORT || 3002

app.listen(port, () => {
  console.log(`🚀 BlastBurger Server is running on port ${port}`)
  console.log(`📊 API Documentation: http://localhost:${port}/api-docs`)
})