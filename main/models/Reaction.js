const {Schema, model} = require('mongoose');

// Schema only
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,

        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // getter TODO
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false,
    }
)

module.exports = reactionSchema