const { Thought, User} = require('../model/index');

const thoughtController ={
    //add thought to user
    async addThought({body}, res){
        try{
            const { _id} = await Thought.create(body)

            if(!_id){
                return res
                       .status(500)
                       .json({message:"Couldn't create that thought check server"})
            }

            const user = await User.findOneAndUpdate(
               {_id: body.userId},
               {$push: {thoughts: _id}},
               {new: true, runValidators: true}
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
            res.status(500).json({message: "Something went wrong with the server", error : err})
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


            res.json(deletedThought)
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
                .status(404)
                .json({message: `Couldn't find that thought`})
            }

            res.json(thought)
            return;
        }
        catch(err){
            res
            .status(404)
            .json({message: `Could not find that thought`})
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
            
            if(!thought.length){
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

            res.json(reaction)
            return;
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    //To update a single thought
    async updateThought({params,body},res){
          try{
            const thought = await Thought.findByIdAndUpdate(
                { _id : params.thoughtId},
                body,
                {new: true, runValidators: true} 
            )

            if(!thought){
                return res
                .status(404)
                .json({message: `No thought found with this id`})
            }
           
            res.json(thought)
            return;
          }
          catch(err){
            res.status(500).json(err)
          }
    },



    //To remove a reaction
    async removeReaction({params, query}, res){
        try{
            const thought = await Thought.findByIdAndUpdate(
                {_id: params.thoughtId},
                {$pull: {reactions: { reactionId: query.reactionId}}},
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
        res.status(500).json({message: `Something went wrong with the server`,error: err})
       }
    }



}


module.exports = thoughtController