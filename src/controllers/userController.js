const User = require('../models/User');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.error(error);
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id;

        try {
            const user = await User.findById(userId);

            if(!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            console.error(error);
        }
    },

    createUser: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const newUser = new User ({ username, email, password });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
        }
    },
};

module.exports = userController;