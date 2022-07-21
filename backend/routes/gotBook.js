const router = require("express").Router();
const User = require("../model/User");


router.put("/", async (req, res) => {
  
  const email = { email: req.body.email };
  const bookUpdate = { bookigot: req.body.bookigot };
  
  const changeBook = await User.updateOne(email, {$push: bookUpdate});
changeBook.n
  });





module.exports = router;