const {Schema, model} = require('mongoose');

// Schema only
const reactionSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // getter TODO
        }
    }
)

module.exports = reactionSchema