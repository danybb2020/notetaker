const express = require ("express");
// const apiroutes = require ("./routes/apiroutes")
// const htmlroutes = require ("./routes/htmlroutes")

//initialize app and create ports 

const app = express ();

const PORT = process.env.PORT || 3000 ;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, function () {
    console.log(`App listening on PORT:${PORT}`);
  });

  