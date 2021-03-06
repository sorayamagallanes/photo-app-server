require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let db = require('./db');
const { cloudinary } = require('./middleware/cloudinary');
let cors = require('cors');
let upload = require('./controllers/uploadcontroller');
let user = require('./controllers/usercontroller');
let validateSession = require('./middleware/validate-session');

// db.sync();
// db.sync({force: true})

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

sequelize.sync();

app.use(express.json());

/**exposed */
app.use('/user', user);
app.use('/upload', upload);
// app.use(require('./middleware/validate-session'));

// app.get('/api/images', async (req, res) => {
//     const { resources } = await cloudinary.search
//         .expression('dev_setups')
//         .sort_by('public_id', 'desc')
//         .max_results(30)
//         .execute();

//     const publicIds = resources.map((file) => file.public_id);
//     res.send(publicIds);
// });


app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT} uwu`)
})