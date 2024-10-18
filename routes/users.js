const { Show, User} = require('../models/index') //import both models from index file, that then calls individual file. M-M association
const express = require('express')
const usersRouter = express.Router() // define usersRouter as an express router, ready to declare CRUD functions upon

//get all
usersRouter.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

//get by id
usersRouter.get('/:id', async (req, res) => {
    const user1 = await User.findByPk(req.params.id)
    res.json(user1)
})


// get users with shows
usersRouter.get('/:id/shows', async (req, res) => {
    const userShows = await User.findByPk(req.params.id, {
        include: Show
    })
    res.json(userShows)
})

module.exports = usersRouter