const Thought = require('../models/Thought')

module.exports = {
    getThoughts(req,res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
    },

    createThought(req,res) {
        Thought.create(req.body)
            .then((thoughtData) => res.json(thoughtData))
            .catch((err) => res.status(500).json(err));
    }
}