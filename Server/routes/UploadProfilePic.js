// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('../utils/cloudinaryconfig'); // your cloudinary config file
// const streamifier = require('streamifier'); // 👈 used to stream buffer to Cloudinary

// const router = express.Router();

// // Multer memory storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Route to handle image upload
// router.post('/upload', upload.single('profilePic'), async (req, res) => {
//   try {
//     const streamUpload = (req) => {
//       return new Promise((resolve, reject) => {
//         let stream = cloudinary.uploader.upload_stream(
//           {
//             folder: 'profile_pics', // optional folder in your cloudinary
//           },
//           (error, result) => {
//             if (result) {
//               resolve(result);
//             } else {
//               reject(error);
//             }
//           }
//         );
//         streamifier.createReadStream(req.file.buffer).pipe(stream);
//       });
//     };

//     const result = await streamUpload(req);
//     res.status(200).json({ message: 'Uploaded successfully', url: result.secure_url });
//   } catch (err) {
//     console.error('Upload error:', err);
//     res.status(500).json({ message: 'Upload failed', error: err });
//   }
// });

// module.exports = router;
