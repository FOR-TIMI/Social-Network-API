const { Thought, User, User} = require('../model/index');

const thoughtController ={
    //add thought to user
    async addThought({params,body}, res){
        try{
            const { _id} = await Thought.create(body)

            if(!_id){
                return res
                       .status(500)
                       .json({message:"Couldn't create that thought check server"})
            }

            const user = await User.findOneAndUpdate(
               {_id: params.userId},
               {$push: {thoughts: _id}},
               {new: true}
            )

            if(!user){
                return res
                .status(404)
                .message({message:"Couldn't find any user with that id"})
            }

            res.json(user)
            return;
        }

        catch(err){
            res.status(500).json(err)
        }
    
    },

    
    //remove thought
    async removeThought({params},res){
        try{
            const deletedThought = await Thought.findOneAndDelete({ _id: params.thoughtId})
            if(!deletedThought){
                return res
                .status(404)
                .json({message: `Couldn't find a comment with this id`})
            }

            const user = await User.findOneAndUpdate(
                {_id: params._id},
                {$pull: {thoughts: params.thoughtId}},
                {new: true}
            )

            if(!user){
                return res
                .status(404)
                .json({message: `COuldn't find a User with this id`})
            }

            res.json(user)
            return
        }
        catch(err){
            res.status(500).json(err)
        }

    },

    // TO Get One thought and include reaction
    async getOneThought({params},res){
        try{
            const thought = await Thought
                                    .findOne({_id: params.thoughtId})
                                    .populate({
                                        path: 'reactions',
                                        select: '-__v'
                                    })
                                    .select('-__v');

            if(!thought){
                return res
                .status(500)
                .json({message: `Could not find that thought`})
            }

            res.json(thought)
            return;
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    //Get all thoughts
    async getAllThoughts(req,res){
        try{
            const thought = await Thought
                                    .find()
                                    .populate({
                                        path: 'reactions',
                                        select: '-__v'
                                    })
                                    .select('-__v');
            
            if(!thought){
                return res
                .status(404)
                .json({message: `there are no thoughts yet`})
            }

            res.json(thought)
            return;
        }
        catch(err){
            res.status(500).json(err)
        }

    },


    //add reaction
    async addReaction({params,body}, res){
        try{
            const reaction = await Thought.findOneAndUpdate(
                { _id : params.thoughtId},
                {$push: {reactions: body}},
                {new: true, runValidators: true} 
            )

            if(!reaction){
                return res
                .status(404)
                .json({message: `No thought found with this id`})
            }
        }
        catch(err){
            res.status(500).json(err)
        }
    },


    //To remove a reaction
    async removeReaction({params}, res){
        try{
            const thought = await Thought.findByIdAndUpdate(
                {_id: params.thoughtId},
                {$pull: {reactions: { reactionId: params.reactionId}}},
                {new: true}
            )

            if(!thought){
                return res
                .status(404)
                .json({message: `Couldn't find that thought`})
            }

            res.json(thought)
            return;
        }
       catch(err){
        res.status(500).json(err)
       }
    }



}


module.exports = thoughtController