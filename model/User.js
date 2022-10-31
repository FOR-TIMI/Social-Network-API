const {Schema, model} = require('mongoose');



const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    // Array of _id values referencing the Thought model
    thoughts : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    // Array of _id values referencing the User model (self-reference)
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON:{
        virtuals: true,
        getters: true
    },
    id:false
}

)

// virtual retrieves the length of the user's friends array field on query.
userSchema
.virtual('friendCount')
.get(function(){
 return this.friends.length
})

const User = model('User', userSchema);


module.exports = User