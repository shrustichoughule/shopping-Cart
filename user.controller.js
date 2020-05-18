const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports.register = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "You need to send email and password" });
  }

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }

    let newUser = User(req.body);
    newUser.save((err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(201).json(user);
    });
  });
};

module.exports.updateUser = (req, res, next) => {
  User.update(
    { _id: req.params.id },
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }
      return res.status(201).json({ "updated User": user });
    }
  );
};

module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    return res.status(201).json(user);
  });
};

module.exports.userDelete = (req, res, next) => {
  User.deleteOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ msg: err });
    }
    return res.status(201).json(user);
  });
};
