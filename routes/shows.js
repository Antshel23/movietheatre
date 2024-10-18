const { Show, User} = require('../models/index') //import both models from index file, that then calls individual file. M-M association
const express = require('express')
const showsRouter = express.Router() // define usersRouter as an express router, ready to declare CRUD functions upon

//get all
showsRouter.get('/', async (req, res) => {
    const shows = await Show.findAll()
    res.json(shows)
})

//get by id
showsRouter.get('/:id', async (req, res) => {
    const show1 = await Show.findByPk(req.params.id)
    res.json(show1)
})


//get shows with users
showsRouter.get('/:id/users', async (req, res) => {
    const showUsers = await Show.findByPk(req.params.id, {
        include: User
    })

    res.json(showUsers)
})

module.exports = showsRouter