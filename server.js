const app = require("./app") // import app
const { db, DataTypes, Model } = require("./db/connection"); // import db 
const port = 3000; // set port to 3000

app.listen(port, () => { // listen for app on specific port
    db.sync(); // sync db with app
    console.log(`Listening at http://localhost:${port}/home`); // log to indicate success
})