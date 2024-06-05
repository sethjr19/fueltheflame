const User = require('../Models/User');

// Create a new user
const registerUser = (req, res) => {
    console.log('req body : ',req.body)
    User.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
}
module.exports = {
    registerUser,
  };
