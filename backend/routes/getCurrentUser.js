const User = require("../model/User");
const router = require("express").Router();
const verify = require("./verifyToken");

router.post("/", function (req, res) {
  User.find({email: req.body.email}, function (err, users) {
    if (err) {
      res.send("Quelque chose ne fonctionne pas !");
      next();
    }
    res.json(users);
  });
});

module.exports = router;