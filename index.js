import express from 'express';
const app = express();

app.use('/', (req,res) => {
  res.send('Hello world mart this is my first cicd codepipeline v2')
})

app.listen(3000 , () => {
  console.log('server is running on port 3000')
})