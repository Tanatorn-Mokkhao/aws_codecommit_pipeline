import express from 'express';
const app = express();

app.use('/', (req,res) => {
  res.send('Hello world mart')
})

app.listen(3000 , () => {
  console.log('server is running on port 3000')
})