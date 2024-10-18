const { Show, User} = require('../models/index') //import both models from index file, that then calls individual file. M-M association
const usersRouter = express.Router() // define usersRouter as an express router, ready to declare CRUD functions upon

module.exports = usersRouter