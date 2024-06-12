const express = require('express')
const blog = require('./routers/blog')

const app = express()
const port = 3000

app.use('/blog', blog)
app.use(express.static("public"))


app.get('/', (req, res) => {
  console.log("its get request")
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log("Hey its post request")
  res.send('Hello World post!')
})

//index file
app.get('/index', (req, res) => {
  console.log("Hey its index")
  res.sendFile('templates/index.html', { root: __dirname })
})

//slug to reduce the /about code
app.get('/about/:slug', (req, res) => {
  console.log("its slug request")
  res.send('Hello World!')
})


//middleware in express
app.use((req, res, next) =>{
  console.log('m1')
  req.hash = "i am hash code"
  //after send requiest it will not perform next middle ware
  //res.send("Hacked by middlelware 1")
  next()
})

app.use((req, res, next) =>{
  console.log('m2')
  next()
})

//middle ware for route
router.use((req, res, next) =>{
  console.log('blog contert')
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})