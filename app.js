require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
const { cloudinary } = require('./middleware/cloudinary');

let upload = require('./controllers/uploadcontroller');
let user = require('./controllers/usercontroller');
let validateSession = require('./middleware/validate-session');

// app.use(express.static('public'));
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors());

sequelize.sync();

app.use(express.json());

/**exposed */
app.use('/user', user);
app.use('/upload', upload);
// app.use(require('./middleware/validate-session'));

app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

// app.post('/api/upload', async (req, res) => {
//     try {
//         const fileStr = req.body.data;
//         const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//             upload_preset: 'dev_setups',
//         });
//         console.log(uploadResponse);n
//         res.json({ msg: 'yaya' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ err: 'Something went wrong' });
//     }
// });


/**protected */
// app.use(require('./middleware/validate-session'));
// put that in upload controller ^^
app.listen(3000, function() {
    console.log('App listening on port 3000 uwu')
})