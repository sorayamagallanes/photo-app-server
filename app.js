require("dotenv").config();
let express = require('express');
let app = express();
let cloudinary = require('cloudinary').v2;
let sequelize = require('./db');

let user = require('./controllers/usercontroller');

sequelize.sync();

app.use(express.json());

/**exposed */
app.use('/user', user);

/**protected */
// app.use(require('./middleware/validate-session'));
// put that in upload controller ^^
app.listen(3000, function() {
    console.log('App listening on port 3000 uwu')
})