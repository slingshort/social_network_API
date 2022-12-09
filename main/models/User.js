const { Schema, model } = require('mongoose');
const moment = require('moment');

// user schema defines parent doc
const UserSchema = new Schema ({
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
            ref: 'Friend',
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


const User = model('User', UserSchema)

module.exports = User;