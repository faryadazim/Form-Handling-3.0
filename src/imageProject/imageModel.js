var mongoose = require("mongoose")
var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "post Title Required"]
  },
  desc:{
      type:String
  },
  name:{
  type:String
  },
  image: {
    type : String
  },
  cloudinaryId:{
    type : String
  }  
  
})




var post = mongoose.model("posts", postSchema)
module.exports = post