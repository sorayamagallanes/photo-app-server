const router = require('express').Router();
const upload = require('../db').import('../models/upload');

const { cloudinary } = require('../middleware/cloudinary');

const validateSession = require('../middleware/validate-session');
// const user = require('../db').import('../models/user');
// router.get('/practice', validateSession, function(req, res) {
//   res.send('practice')
// });

//upload post

router.post('/api/upload', validateSession, (req, res) => {
      const uploadPost = 
        { title: req.body.upload.title,
          caption: req.body.upload.caption,
        image: req.body.upload.image,
        author: req.user.username,
        owner: req.user.id,
        //  req.body.data
       }
      ;
    const uploadResponse = cloudinary.uploader.upload(uploadPost.image, {
        upload_preset: 'dev_setups',
        
    });
console.log(uploadResponse);
    
    upload.create(uploadPost)
    .then(() => res.status(200).json({ message: 'Photo uploaded Successfully!' }))
    .catch(err => res.status(500).json({ error: err }))
});

//Deleting a post
router.delete('/delete/:title', validateSession, function (req,res) {
  const query = {where: { title: req.params.title, owner: req.user.id }};

  upload.destroy(query)
  .then(() => res.status(200).json({ message: 'Post Removed' }))
  .catch((err) => res.status(500).json({ error: err }));
})


//Update post
router.put('/update/:title', validateSession, function (req, res) {
  const updateUpload = {
    title: req.body.upload.title,
    caption: req.body.upload.caption,
    author: req.user.username,
    owner: req.user.id
  }


  const query = { where: { title: req.params.title }};

  upload.update(updateUpload, query)
.then((upload) => res.status(200).json(upload))
.catch((err) => res.status(500).json({error: err}));
})

//Get all posts
router.get('/:title', (req, res) => {
  let title = req.params.title;

  upload.findAll({
    where: {title: title}
  })
  .then(upload => res.status(200).json(upload))
  .catch(err => res.status(500).json({error: err}))
});

//*****GET IMAGES
router.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:dev_setups')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});



module.exports = router;