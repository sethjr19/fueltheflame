const mongoose = require('mongoose')

const FriendsSchema = new mongoose.Schema({
   sender : { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
   receiver : { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
   status : {
    type: Number, 
    enums: [
        0, //add friend
        1, //requested
        2, //pending
        3, //friends
    ]
   }
})

const FriendModel = mongoose.model("friends", FriendsSchema)

module.exports = FriendModel