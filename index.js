const express = require("express")
const app = express()
const port = 3001
const postRouter = require("./routes/posts")
const EndpointNotFound = require("./middlewares/EndpointNotFound")
const errorsHandler = require("./middlewares/errorsHandler")

app.use(express.json())
app.use('/api/posts', postRouter)

app.use(errorsHandler)
app.use(EndpointNotFound)

app.listen (port, ()=>{
    console.log(`The server is start and listening in http://localhost:${port}`)
})