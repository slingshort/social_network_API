const { Schema, model } = require('mongoose');
const moment = require('moment');

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
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            // references..
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            // references
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    };







)