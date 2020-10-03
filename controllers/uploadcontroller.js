// function create_direct(req, res) {
//     // In direct mode, the image is uploaded to Cloudinary by the browser,
//     // and upload metadata is available in JavaScript (see add_direct.ejs).
//     var result = {};
//     var photo = new Photo(req.body);
//     result.photo = photo;
//     // image was not uploaded, returning to edit form
//     if (!req.body.image_id) {
//       if (req.body.type === 'direct') {
//         res.redirect('/photos/add_direct');
//       } else {
//         res.redirect('/photos/add_direct_unsigned');
//       }
//       return;
//     }
//     var image = new cloudinary.PreloadedFile(req.body.image_id);
//     // check that image resolved from image_id is valid
//     if (image.is_valid()) {
//       photo.image = image.toJSON();
//       console.dir(photo.image);
//     }
//     photo.save().then(function () {
//       console.log('** photo saved');
//     })
//       .catch(function (err) {
//         result.error = err;
//         console.log('** error while uploading file');
//         console.dir(err);
//       }).finally(function () {
//         res.render('photos/create_direct', { photo: photo, upload: photo.image });
//       });
//   }