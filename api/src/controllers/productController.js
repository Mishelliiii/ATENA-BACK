const Product = require("../models/Product");

module.exports = {
  async create(req, res) {
    try {
      const result = await Product.create(req.body);

      console.log(`result: ${result}`);

      return res.json({status: "ok", result});
    } catch (err) {
      console.error(`Error: ${err}`);

      return res.json({status: "error", error: err});
    }
  },

  async list(req, res) {
    try {
      const result = await Product.findAll({
        attributes: [
          'id',
          'name',
          'category',
          'description'
        ]
      });

      console.log(`result: ${result}`);

      return res.json({status: "ok", result});
    } catch (err) {
      console.error(`Error: ${err}`);

      return res.json({status: "error", error: err});
    }
  },

  async get(req, res) {
    try {
      const result = await Product.findByPk(req.body.id);

      console.log(`result: ${result}`);

      if (result == null) {
        return res.json({status: "fail", message: "not found"});
      } else {
        return res.json({status: "ok", result});
      }

    } catch (err) {
      console.error(`Error: ${err}`);

      return res.json({status: "error", error: err});
    }
  },

  async remove(req, res) {
    try {
      const result = await Product.destroy({
        where: {id: req.body.id}
      });

      if (result) {
        return res.json({status: "ok", result});
      } else {
        return res.json({status: "fail", message: "not found"});
      }
    } catch (err) {
      console.error(`Error: ${err}`);

      return res.json({status: "error", error: err});
    }
  }
};
