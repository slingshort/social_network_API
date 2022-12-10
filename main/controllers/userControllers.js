const User = require('../models/User')

module.exports = {
    getUsers(req,res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
    },

    createUser(req,res) {
        User.create(req,body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req,res) {
        User.findOne({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },

    updateUser(req,res) {
        User.findOne(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new:true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
          )
    },

    deleteUser(req,res) {
        User.findOneAndDelete({_id: req.params.userId})
         .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID'})
                //   (cascade delete thoughts of user)
              : Thought.deleteMany({_id: { $in: user.thoughts} })
        )
        .then(() => res.json({ message: 'User and thoughts deleted'}))
        .catch((err) => res.status(500).json(err));
    }
}