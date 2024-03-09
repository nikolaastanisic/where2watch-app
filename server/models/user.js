const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    repeatPassword: String,
    username: {
        type: String
    },
    name: {
        type: String
    }
})
const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel;
