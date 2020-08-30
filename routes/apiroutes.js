const db = require('../db/db.json');
const fs = require("fs");
const path = require("path");

module.exports = function (app) {


    app.get('/api/notes', function (req, res) {
        res.json(db);
    });

    app.post('/api/notes', function (req, res) {

            var newNotes = req.body;
            console.log(newNotes);

            db.push(newNotes);
            console.log(db);

            fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));

        res.json(db);
        
    });

};