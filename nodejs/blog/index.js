const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/trang-chu', (req, res) => {  // Định nghĩa tuyến đường
  res.send('Hello World! Windows')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})