const User = require("../model/user");
const cookieToken = require("../util/cookieToken");
module.exports = {
  siginup: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password)
        return res.status(401).json({ error: "Please Enter all Fields" });
      const newUser = await new User({
        name,
        email,
        password,
      }).save();
      cookieToken(newUser, res);
    } catch (err) {
      console.log(err);
    }
  },

  siginin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(401).json({ error: "Please Enter all Fields" });

      const userFound = await User.findOne({ email }).select("+password");

      if (!userFound)
        return res.status(400).json({ error: "Invalid Email/Password" });

      const isValidpassword = await userFound.isValidpassword(password);

      if (!isValidpassword)
        return res.status(400).json({ error: "Invalid Email/Password" });

      cookieToken(userFound, res);
    } catch (err) {
      console.log(err);
    }
  },
};
