const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000



app.use(bodyParser.urlencoded({extended: true,}))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


var routes = require('./api/routes/userListRoutes')
routes(app)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})