const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");
const { hashPassword, comparePass} = require('./helpers/auth')
var cors = require('cors');

require('dotenv').config();
//for registration
const Register = require("./controller/UserController")
const UserModel = require("./Models/User")
const FriendModel = require("./Models/Friends")
const { ObjectId } = require('mongoose').Types;

//Categories
const CategoryModel = require("./Models/Category")



const app = express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
app.use((req, res, next) => {
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
});
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
const port = 3000;

mongoose.connect('mongodb://localhost:27017/fueltheflame');

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.post('/register', async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = await hashPassword(password)
    try {
        const User = await UserModel.create({
            username, email, password:hashedPassword
        });
        res.json(User)
        console.log(User)
    } catch(err) {
        console.error(err)
    }
});

app.post('/login', async (req, res) => {

    try {
        const {email, password} = req.body;
        //find if user exists 
        const user = await UserModel.findOne({email});
        if (!user) {
            res.json('No user found');
            console.log('No user found')
        }
        else{
            const match = await comparePass(password, user.password)
            if (match) {
                jwt.sign({email: user.email, name: user.username, id: user._id}, process.env.JWT_SECRET, {}, (err,token) => {
                    if(err) throw err;
                    res.cookie('token', token).json(user)
                })
                console.log('passwords match')
            } else {
                console.log('passwords dont match');
            }
        }   
    } catch (e) {
        console.log(e);
    }
})

app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
})

app.get('/browse', (req,res) => {
    const {token} = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, User) => {
        if (err) {throw err}
        try{
            const {username, email, _id} = await UserModel.findById(User.id)

            // Assuming username and email are fields in the User model
            res.json({ username, email, _id });
        } catch(error) {
            console.error('Error finding user')
        }
    })
    
    } else {
        res.json(null)
    }
})

app.get('/categories', (req,res) => {
    const {token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, User) => {
      res.json(await CategoryModel.find())  
    });
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies
    const {user} = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, User) => {
            if (err) {throw err}
            try{
                const currentUser = await UserModel.findById(User.id)
                res.json(currentUser)
            } catch(err) {
                console.error('Error updating user', err)
            }

          });
    } else {
        res.status(401).json({error:'Unauthorized Token'})
    }
})

app.get('/profile/edit', (req,res) => {
    const {token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, User) => {
      res.json(await CategoryModel.find())  
    });
})

app.post('/profile/edit/update', (req,res) => {
    const {token} = req.cookies
    const {email, username} = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, async (err, User) => {
            if (err) {throw err}

            try{
                const updatedUser = await UserModel.findByIdAndUpdate(User.id, {email, username}, {new:true})
                res.json(updatedUser)
            } catch(err) {
                console.error('Error updating user', err)
            }

          });
    } else {
        res.status(401).json({error:'Unauthorized Token'})
    }
})

app.get('/users', async (req,res) => {
    const { userId } = req.query;
    console.log('user id:', userId)
    const userIdObj = new ObjectId(userId);
    try {
        const users = await UserModel.find({ _id: { $ne: userIdObj } })
        res.json(users)
    } catch (err) {
        console.error('Error', err)
    }
})

app.post('/addfriend', async (req,res) => {
    const { token } = req.cookies;
    const {user, friend} = req.body

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!ObjectId.isValid(user) || !ObjectId.isValid(friend)) {
        return res.status(400).json({ message: 'Invalid user or friend ID' });
    }

    try {   
    const docA = await FriendModel.findOneAndUpdate(
        { sender: user, receiver: friend },
        { $set: {status: 1}}, 
        {upsert: true, new: true})
        console.log('Friend Added!')

    const addFriend = await UserModel.findOneAndUpdate(
        {_id: user},
        {$push: {friends: friend}}
    )
    
    const docB = await FriendModel.findOneAndUpdate(
        { sender: friend, receiver: user },
        { $set: {status: 2}}, 
        {upsert: true, new: true}
    )

    console.log('DocA', docA)

    } catch (err) {
        console.error('Error: ', err)
    }
})

app.get('/pending-friends', async(req,res) => {
    const {token} = req.cookies
    const { userId } = req.query;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const userIdObj = new ObjectId(userId);
    if (!ObjectId.isValid(userIdObj)) {
            console.log('invalid format');
        }
        else {
            console.log('valid format')
        }

    try {
        // const pendingFriend = await FriendModel.find({ sender: userIdObj, status : 1 });
        // console.log("Matching Friends:", pendingFriend);
        const pendingFriend = await FriendModel.aggregate([
            {
                $match: {
                    sender: userIdObj,
                    status : 1
                }
            },
            {   $lookup : {
                from: UserModel.collection.name,
                localField: "sender",
                foreignField : "_id",
                as : "senderInfo"
                
            }},
            
                { $unwind: "$senderInfo" },
                {
                    $lookup: {
                        from: UserModel.collection.name,
                        localField: "receiver",
                        foreignField : "_id",
                        as : "receiverInfo"
                    }
                },

                {$unwind : "$receiverInfo"},

                { $project: { // Project only the desired fields from senderInfo                   
                    "senderInfo": 1,
                    "receiverInfo" : 1

                }}
        ]);
        res.json(pendingFriend)
        console.log(pendingFriend)
        // console.log('pending friend', pendingFriend)
    } catch (err) {
        console.error(err)
    }
})


app.get('/pending-friends', async(req,res) => {
    const {token} = req.cookies
    const { userId } = req.query;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    console.log('user id is', userId) 
    const userIdObj = new ObjectId(userId);
    if (!ObjectId.isValid(userIdObj)) {
            console.log('invalid format');
        }
        else {
            console.log('valid format')
        }
    try {
        // const pendingFriend = await FriendModel.find({ sender: userIdObj, status : 1 });
        // console.log("Matching Friends:", pendingFriend);
        const pendingFriend = await FriendModel.aggregate([
            {
                $match: {
                    sender: userIdObj,
                    status : 1
                }
            },
            {   $lookup : {
                from: UserModel.collection.name,
                localField: "sender",
                foreignField : "_id",
                as : "senderInfo"
                
            }},
            
                { $unwind: "$senderInfo" },
                {
                    $lookup: {
                        from: UserModel.collection.name,
                        localField: "receiver",
                        foreignField : "_id",
                        as : "receiverInfo"
                    }
                },

                {$unwind : "$receiverInfo"},

                { $project: { // Project only the desired fields from senderInfo                   
                    "senderInfo": 1,
                    "receiverInfo" : 1

                }}
        ]);
        res.json(pendingFriend)
        console.log(pendingFriend)
        // console.log('pending friend', pendingFriend)
    } catch (err) {
        console.error(err)
    }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});