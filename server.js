const app = require("./app") // import app
const db = require("./db/connection"); // import db 
const port = 3000; // set port to 3000

app.listen(port, () => { // listen for app on specific port
    db.sync(); // sync db with app
    console.log(`Listening at http://localhost:${port}/restaurants`); // log to indicate success
})