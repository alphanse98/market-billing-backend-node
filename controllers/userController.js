const User = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const { username, role } = req.body;
    const newUser = await User.create({ username, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Create User Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Get Users Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
