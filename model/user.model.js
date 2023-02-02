const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: null,
            index: true,
            required: true
        },
        email: {
            type: String,
            default: null,
            index: true,
            unique: true
        },
        password: {
            type: String,
            default: null,
            index: true,
        },
        displayPhoto: {
            type: String,
            default: null,
            index: true
        },
        mobile: {
            type: Number,
            required: true,
            index: true
        }
    },
    {
        timestamps: true,
    }
);

const Users_Model = mongoose.model('evusers', UserSchema)
module.exports = Users_Model
