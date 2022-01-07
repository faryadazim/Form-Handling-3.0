var product = require("./Model");

// ... ______________AddData
module.exports.addProduct = async (req, res) => {
  try {
    if (!req.body.productName) {
      res.json({ status: 400, message: "name not found" });
      return;
    } else if (!req.body.desc) {
      res.json({ status: 400, message: "desc not found" });
      return;
    } else if (!req.body.price) {
      res.json({ status: 400, message: "price not found" });
      return;
    }
    const { productName, desc, price } = req.body;
    var addProduct = new product({
      productName,
      desc,
      price,
    });
    addProduct.save((error, success) => {
      if (error) {
        console.log("Error while Saving Product");
      } else {
        res.json({ status: 200, message: "Success", data: success });
      }
    });
  } catch (error) {
    //   console.log("error in controller");
    res.json({ status: 400, message: "Error" });
  }
};

// ... ______________DeleteData

module.exports.deleteProduct = async (req, res) => {
  try {
    if (!req.body.id) {
      console.log(req.body);
      res.json({ status: 400, message: "Id not found" });
      return;
    }
    const deleteProduct = await product.findByIdAndDelete(req.body.id);
    if (!deleteProduct) {
      res.json({ status: 400, message: "ID Wrong" });
    }
    res.json({ status: 200, message: "Deleted" });
  } catch (error) {
    //   console.log("error in controller");
    res.json({ status: 400, message: "Error" });
  }
};

// ... ______________UpdateData
module.exports.updateProduct = async (req, res) => {
  try {
    if (!req.body.id) {
      res.json({ status: 400, message: "Id required" });
      return;
    }
    const { id, productName, desc, price } = req.body;
    const update = await product.findByIdAndUpdate(
      id,
      {
        productName,
        desc,
        price,
      },
      { new: true }
    );
    if (!update) {
      console.log("!update");
      res.json({ status: 400, message: "Id wrong" });
      return;
    }

    return res.json({ data: update });
  } catch (error) {
    console.log("Error");
    res.json({ status: 400, message: error });
    return;
  }
};
