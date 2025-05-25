const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dun32sswx', 
  api_key: '549366328334384', 
  api_secret: 'gB8bpwHKHR-HBZOLOQcCNE8PBEw'
});
module.exports = cloudinary;