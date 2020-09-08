const { Router } = require("express");
const bcrypt = require("bcryptjs");

const { UserModel } = require("../models/User");

const authRoute = Router();

authRoute.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const candidate = await UserModel.findOne({ email });
    if (candidate) throw new Error("User has been created with this email.");

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, password: hashedPassword });

    await newUser.save();
    res.json({ message: "Success!" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: error.stack,
    });
  }
});

authRoute.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User is not exist.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Password is not correct.");

    req.session.user = user;
    req.session.save((err) => {
      if (err) throw new Error(err);
    });

    res.json({ message: "Success!" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: error.stack,
    });
  }
});

authRoute.get("/", (req, res) => {
  res.json({ a: 5 });
});

module.exports = {
  authRoute,
};
