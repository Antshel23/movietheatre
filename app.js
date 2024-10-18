const express = require('express') //import express and app
const app = express() // call express framework for routing / middleware incorp
const userRouter = require('./routes/users') //import userRouter from user route
const showsRouter = require('./routes/shows') //import showsRouter from user route

app.use('/users', usersRouter) // mount userRouter onto app
app.use('/shows', showsRouter) // mount showsRouter onto app

module.exports = app // export app out to server