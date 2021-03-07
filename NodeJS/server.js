const express = require('express')
const app = express()
const cors = require('cors')

app.use((cors()))
app.use(express.json())

const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')

//app.use ('/recipes', recipesRouter)
app.use('/users', usersRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})