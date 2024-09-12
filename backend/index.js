const express = require('express');
const route = require('./src/route/index');
require('dotenv').config();
const app = express();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/', route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})