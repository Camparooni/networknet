const Thought = require('../models/Thought');

const thoughtController = {
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (error) {
            console.error(error);
        }
    },

    getThoughtById: async (req, res) => {
        const thoughtId = req.params.id;

        try {
            const thought = await Thought.findById(thoughtId);

            if (!thought) {
                return res.status(404).json({ error: 'Thought not found' });
            }

            res.json(thought);
        } catch (error) {
        console.error(error);
        }
    },

    createThought: async (req,res) => {
        const {text, user } = req.body;

        try {
            const newThought = new Thought({ text, user });
            await newThought.save();
            res.status(201).json(newThought);
        } catch (error) {
            console.error(error);
        }
    },
};

module.exports = thoughtContoller;