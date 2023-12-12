const express = require('express');
const thoughtController = require('../controllers/thoughtController');

const router = express.Router();

router.get('/thoughts', thoughtController.getAllThoughts);
router.get('/thoughts/:id', thoughtController.getThoughtById);
router.post('/thoughts', thoughtController.createThought);

module.exports = router;