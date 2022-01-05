var user = require("./Model"); //import schema

// ...............................................................AddData | Write Data

module.exports.addData = async (req, res) => {
  try {
    if (!req.body.name) {
      res.json({ status: 400, message: "name not found" });
      return;
    } else if (!req.body.course) {
      res.json({ status: 400, message: "course not found" });
      return;
    } else if (!req.body.roll) {
      res.json({ status: 400, message: "roll not found" });
      return;
    }
    const { name, course, roll } = req.body;
    var addPost = new user({
      name,
      course,
      roll,
    });
    addPost.save((err, success) => {
      if (err) {
        res.json({ status: 400, message: err });
        return;
      }
      res.json({ status: 200, message: "Success", data: success });
    });
  } catch (error) {
    res.json({ status: 400, message: err });
    return;
  }
};
