var post = require("./imageModel");//import schema
const cloudinary = require('../config/Cloudinary');

module.exports.addData = async (req, res) => {
  try {
    console.log("run");
    if (!req.body.title) {
      res.json({ status: 400, message: "title not found" })
      return
    } else if (!req.body.desc) {
      res.json({ status: 400, message: "Desc not found" })
      return
    } else if (!req.body.name) {
      res.json({ status: 400, message: "name not found" })
      return
    }
    const { title, desc, name } = req.body
    var addPost = new post({
      title, desc, name
    })
    addPost.save((err, success) => {
      if (err) {
        res.json({ status: 400, message: err })
        return
      }
      res.json({ status: 200, message: "Success", data: success })
    })




  } catch (error) {
    res.json({ status: 400, message: err })
    return

  }

};

module.exports.updateData = async (req, res) => {
  try {
    if (!req.body.id) {
      res.json({ status: 400, message: "Id required" })
      return
    }
    if (req?.file) {
    await cloudinary.uploader.destroy(req?.body?.cloudinaryId)      
    }
    const imageUpload = await cloudinary.uploader.upload(req?.file?.path)

    const { id, name, desc, title } = req.body
    console.log("run");
    const update = await post.findByIdAndUpdate(id, {
      name, desc, title
    }, { new: true })
    if (!update) {
      res.json({ status: 400, message: "Id wrong" })
      return      
    }

    return res.json({ data: update })

  } catch (error) {
    res.json({ status: 400, message: error })
    return

  }

};
module.exports.deleteData = async (req, res) => {
  try {
    if (!req.body.id) {
      res.json({ status: 400, message: "Id required" })
      return
    }
    await cloudinary.uploader.destroy(req?.body?.cloudinaryId)
    const deleteData = await post.findByIdAndDelete(req.body.id)
    if (!deleteData) {
      res.json({ status: 400, message: "Id wrong" })
      return      
    }
    return res.json({message:'success'})
  } catch (error) {
    res.json({ status: 400, message: error })
    return

  }

};
module.exports.DataForm = async (req, res) => {
  try {
    console.log("run",req.body);
    console.log("file",req.file);    
    if (!req.body.title) {
      res.json({ status: 400, message: "title not found" })
      return
    } else if (!req.body.desc) {
      res.json({ status: 400, message: "Desc not found" })
      return
    } else if (!req.body.name) {
      res.json({ status: 400, message: "name not found" })
      return
    }
    const { title, desc, name } = req.body
    const imageUpload = await cloudinary.uploader.upload(req?.file?.path)
    console.log("imageUpload",imageUpload);    
    var addPost = new post({
      title, desc, name,
      cloudinaryId : imageUpload?.public_id,
      image : imageUpload?.secure_url
    })
    addPost.save((err, success) => {
      if (err) {
        res.json({ status: 400, message: err })
        return
      }
      res.json({ status: 200, message: "Success", data: success })
    })




  } catch (error) {
    res.json({ status: 400, message: error })
    return

  }

};