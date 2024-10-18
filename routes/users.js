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

//put shows with users
usersRouter.put('/:userId/shows/:showId', async (req, res) => {

    //store req.params
    const {userId, showId} = req.params
    
    //locate req.params in models
    const user = await User.findByPk(userId)
    const show = await Show.findByPk(showId)

    // error handling if user or show do not exist in models
    if (!user || !show) {
        return res.status(404).json({message: 'User or Show does not exist!'})
    }

    //check association status
    const userShowState = await user.hasShow(show)

    // addShow and return whether it was updated or created
    if (userShowState) {
        await user.addShow(show);
        return res.status(200).json({message: 'Updated!'})
    }
    else {
        await user.addShow(show);
        return res.status(201).json({message: 'Created!'})
    }
})

module.exports = usersRouter