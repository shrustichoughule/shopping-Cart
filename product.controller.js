const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports.addProduct = (req, res, next) => {
  User.update(
    { _id: req.params.userId },
    {
      $push: {
        products: {
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
        },
      },
    },
    (err, product) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      User.findById({ _id: req.params.userId }, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: err });
        }
        return res.status(201).json(user);
      });
    }
  );
};

module.exports.updateProduct = (req, res, next) => {
  User.updateOne(
    { _id: req.params.userId, "products._id": req.params.productId },
    { $set: { "products.$": req.body } },
    (err, product) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      User.findById({ _id: req.params.userId }, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: err });
        }
        return res.status(201).json(user);
      });
    }
  );
};

module.exports.allProduct = (req, res, next) => {
  User.findById({ _id: req.params.userId }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    return res.status(201).json(user);
  });
};

module.exports.deleteProduct = (req, res, next) => {
  User.update(
    { _id: req.params.userId },
    { $pull: { products: { _id: req.params.productId } } },
    (err, product) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      User.findById({ _id: req.params.userId }, (err, user) => {
        if (err) {
          return res.status(400).json({ msg: err });
        }
        return res.status(201).json(user);
      });
    }
  );
};
