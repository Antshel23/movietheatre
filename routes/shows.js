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

//get shows with genre
showsRouter.get('/:genre', async (req,res) => {
    const genre1 = req.params.genre
const showsWithGenre = await Show.findAll({where: {genre: genre1}})
if (showsWithGenre.length > 0) {
    return res.status(200).json(showsWithGenre)
}
else {
    return res.status(404).json({message: 'Genre does not exist'})
}
})


//put show available to true or false
showsRouter.put('/:id/:state', async (req, res) => {
    const {id, state} = req.params
    const showId = await Show.findByPk(id)
    if (!showId) {
        return res.status(404).json({message: 'Show does not exist'})
    }

    if (state === 'available') {
        await showId.update({available: true})
        return res.status(200).json({message: 'Updated!'})
    }
    else if (state === 'unavailable') {
        await showId.update({available: false})
        return res.status(200).json({message: 'Updated!'})
    }
    else {
        return res.status(404).json({message: 'Please use available or unavailable to declare'})
    }
})

// delete show
showsRouter.delete('/:id', async (req,res) => {
    const showId = await Show.findByPk(req.params.id)
    if (!showId) {
        return res.status(404).json({message: 'Show does not exist'})
    }
    await showId.destroy()
    return res.status(200).json({message: 'Deleted!'})
})

module.exports = showsRouter