const express = require("express");
const user = require("../models/user");
const router = express.Router(); // for routing

router.get("/", async (req, res) => {
  try {
    const userData = await user.find();
    res.status(200).send(userData);
  } catch (err) {
    res.status(400).send("error occured" + err);
  }
});

// post request
router.post("/", async (req, res) => {
  const User = new user({
    name: req.body.name,
    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
  });
  console.log(req.body.name);
  try {
    const temp = await User.save();
    res.status(200).json(temp);
  } catch (err) {
    res.send(err);
  }
});

// patch request
router.patch("/:id", async (req, res) => {
  try {
    const User = await user.findById(req.params.id);
    // have only modified name here, can be done for other properties too.
    User.name = req.body.name;
    const temp = await User.save();
    res.json(temp);
  } catch (err) {
    res.send(err);
  }
});
// delete request
router.delete("/:id", async (req, res) => {
  try {
    const User = await user.findById(req.params.id);
    // have only modified name here, can be done for other properties too.
    console.log(User);
    await User.remove();
    console.log("deleted");
    res.json(user);
  } catch (err) {
    res.send(err);
    console.log("error");
  }
});

module.exports = router;
