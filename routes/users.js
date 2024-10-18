const { Show, User} = require('../models/index') //import both models from index file, that then calls individual file. M-M association
const express = require('express')
const usersRouter = express.Router() // define usersRouter as an express router, ready to declare CRUD functions upon

usersRouter.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = usersRouter