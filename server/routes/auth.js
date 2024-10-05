const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    // Validate the request body
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

    // Compare passwords
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

    // Generate authentication token (ensure this method is defined in the User model)
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in successfully" });

  } catch (error) {
    // Handle server errors
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

// Validation function for login data
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router; // Fixed the export statement
