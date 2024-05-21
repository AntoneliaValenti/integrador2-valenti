const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        //required: true
    },
    lastname: {
        type: String,
        //required: true
    },
    mail: {
        type: String,
        unique: true
        //required: true
    },
    age: {
        type: Number,
        //required: true
    },
    password: {
        type: String,
       // required: true
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    role: {
        type: String,
        enum: ["admin", "user", "premium"],
        default: "user"
    }
},
    {
        timestamps:true,
        strict:false
    }
)

const Users = mongoose.model('users', UsersSchema)

module.exports = Users