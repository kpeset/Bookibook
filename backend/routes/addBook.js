const router = require("express").Router();
const User = require("../model/User");


router.put("/", async (req, res) => {
  
  const email = { email: req.body.email };
  const bookUpdate = { bookiwant: req.body.bookiwant };
  
  const changeBook = await User.updateOne(email, {$push: bookUpdate});
changeBook.n
  });





module.exports = router;