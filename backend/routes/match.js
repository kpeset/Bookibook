const User = require("../model/User");
const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", function (req, res) {
  User.find({ $expr: { $eq: ["$bookigot", "$bookiwant"] } }, function (err, users) {
    if (err) {
        res.send("echec")
        next
    }
res.send("match")  });



});

module.exports = router;
