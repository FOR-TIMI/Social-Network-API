const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat')


const reactionSchema = new Schema({
    reactionId: {
        type : Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        defaut: Date.now,
        get: function(createdAtVal){
            return dateFormat(createdAtVal)
        }
    }
},
{
    toJSON: {
        getters: true
    }
}
)


const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        minLength:1,
        maxLength: 280 
    },
    createdAt: {
        type: Date,
        defaut: Date.now,
        get: function(createdAtVal){
            return dateFormat(createdAtVal)
        }
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJSON:{
        getters: true
    }
}
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought