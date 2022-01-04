const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
  cloud_name: 'ddmd7feqp', 
  api_key: '557486454642249', 
  api_secret: 'O5MGNNHSuh6rcKZjW88Y8RLbWGQ' 
}); 
module.exports = cloudinary;