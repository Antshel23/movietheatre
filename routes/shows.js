const { Show, User} = require('../models/index') //import both models from index file, that then calls individual file. M-M association
const express = require('express')
const showsRouter = express.Router() // define usersRouter as an express router, ready to declare CRUD functions upon

showsRouter.get('/', async (req, res) => {
    const shows = await Show.findAll()
    res.json(shows)
})

showsRouter.get('/:id', async (req, res) => {
    const show1 = await Show.findByPk(req.params.id)
    res.json(show1)
})

module.exports = showsRouter