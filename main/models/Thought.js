const { ObjectId } = require('bson');
const {Schema, model} = require('mongoose');
const userSchema = require('./User');


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
        },
        reactions: {
            // TODO nested docs created with reaction schema
        },
        meta: {
            reactions: Number,
        }
        // TODO reaction count virtual

    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
        // TODO getters?

      }
);

thoughtSchema
    .virtual('reactionCount')
    //getter
    .get(function () {
        return this.modifiedPaths.reactions;
    });

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
            // fix
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // getter?
        }
    }
)

const Thought = model('Thought', thoughtSchema)

module.export = Thought;