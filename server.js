const express = require('express')
const app = express()
const PORT = process.env.PORT || 4090

// middleswares
const logger = require('./middlewares/logger')
// const sessions = require('./middlewares/sessions')

// controllers

// const usersController = require('./controllers/users_controller')
// const sessionsController = require('./controllers/sessions_controller')

// start the web server
app.listen(PORT,
    () => console.log(`Server now listening to port ${PORT}`)
)

// workflow of express: starts from receiving a user request and ends with providing a response.
// Each step in the workflow is a middleware function passed into 'app.use'.

// receive request (from browser)
//     |
//     V
// middleware function to log request info in the terminal
app.use(logger)
//     |
//     V
// middleware to send backl our SPA (Single-Page Application)
// app.use(express.static('client'))
//     |
//     V
// middleware to parse JSON body in a POST, PUT or DELETE request
// and it assigns the data to req.body
// app.use(express.json())
//     |
//     V
// enable sessions
// app.use(sessions)
//     |
//     V
// middleware for controllers with routes

// app.use('/api/users', usersController)
// app.use('/api/sessions', sessionsController)
//     |
//     V
// send response back to user

/////test angela
