const { User, Thought} = require('../model/')


const userController = {

    //To get all users
    async getAllUsers(req,res){
        try{
            
            const users = await User
                            .find()
                            .populate({
                                path: "thoughts",
                                select: "-__v",
                            })
                            .populate({
                                path: 'friends',
                                select: '-__v',
                            })
                            .select("-__v")

            if(!users.length){
            return res
            .status(404)
            .json({message: "There are no users yet"})
            }

            res.json(users)
            return;
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    //To get one user
    async getOneUser({params}, res){
        try{
            const user = await User.findOne({_id: params.id})
                                    .populate({
                                        path: "thoughts",
                                        select: "-__v",
                                    })
                                    .populate({
                                        path: 'friends',
                                        select: '-__v',
                                    })
                                    .select("-__v")
            if(!user){
                return res
                .status(404)
                .json({message: `Couldn't find that user`})
            }

            res.json(user)
            return;
        }
        catch(err){
            res.status(500).json(err)
        }
    },

    // To create user
    async createNewUser({body}, res){
        try{
            const user = await User.create(body)
            res.json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },


    //To update a single user
    async updateUser({params,body}, res){
        try{
            const user = await User.findOneAndUpdate(
                {_id: params.id}, 
                body, 
                {new: true, runValidators: true})

            if(!user){
                return res
                .status(404)
                .json({message: "Couldn't find that user"})
            }

            res.json(user);
            return;   
         }

    catch(err){
        res.status(500).json(err)
    }

    },

    //To delete a single user and all user thoughts
    async deleteUser({params}, res){
        try{
            const deletedUser = await User.findByIdAndDelete({_id: params.id})
            const deleteThoughts = await Thought.remove({
                _id:{
                    $in: deletedUser.thoughts
                }
            })
            if(!deletedUser){
                return res
                .status(404)
                .json({message: "Could not find that pizza"})
            }
            res.json({deletedUser,deleteThoughts})
            return;
        }
        catch(err){
            res.status(500).json(err)
        }
    
    }



}



module.exports = userController