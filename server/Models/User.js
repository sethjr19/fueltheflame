const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
   username:String,
   email:String,
   password:String,
   friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friends' }, {timestamps: true}]
})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel