const mongoose = require('mongoose');

const userSchema = {
    name:{
        type: String,
        required: true,
    },

    nickname:{
        type: String
    },

    email:{
        type: String
    },

    picture:{
        type: String
    },

    affiliatedNumber:{
        type: Number,
        unique:true,
        required: true
    },

    affiliationDate:{
        type: Date
    },

    occupation:{
        type: String
    },

    birthdate:{
        type: Date
    },

    neasDiscovered:{
        type: Array,
    }
}

const createUserSchema = mongoose.Schema(userSchema);
const Users = mongoose.model('users', createUserSchema);

module.exports = Users;