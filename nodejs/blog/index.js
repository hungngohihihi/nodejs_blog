const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {  // Định nghĩa tuyến đường
  res.send('Hello World!   MACOS')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})