const { ObjectId } = require('bson');
const {Schema, model} = require('mongoose');
const User = require('./User');
const reaction = require('./Reaction')


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length:280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
            ref: 'User',
        },
        reactions: [reaction],

        meta: {
            reactions: Number,
        }
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false,
      }
);

thoughtSchema
    .virtual('reactionCount')
    //getter
    .get(function () {
        return this.reactions.length;
    });



const Thought = model('Thought', thoughtSchema)

module.exports = Thought;