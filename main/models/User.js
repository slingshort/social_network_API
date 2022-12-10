const { Schema, model } = require('mongoose');
const moment = require('moment');
const Thought = require('./Thought')

// user schema defines parent doc
const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        // mongoose matching validation TODO
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // TODO fix
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// friendCount virtual
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length
    });

const User = model('User', userSchema)

module.exports = User;