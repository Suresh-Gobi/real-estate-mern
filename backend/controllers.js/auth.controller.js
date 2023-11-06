const User = require("../models/user.model.js");

const signup = (req, res) => {
    const {username, email, password} = req.body;

    const newUser = new User({username, email, password});
};

module.exports = {
    signup
};
