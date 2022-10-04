const Product = require("../model/product")
module.exports = {
  addProducts: async (req, res) => {
    try {
      const { title, price } = req.body;
      const added = await new Product({
        title,
        price,
      }).save();
      res.json(added);
    } catch (err) {
      console.log(err);
    }
  },
};
