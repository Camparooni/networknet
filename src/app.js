const express = require('express');
const mongoose = require('mongoose');
const connectToDatabase = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');


const app = express();

connectToDatabase();

mongoose.connect('mongodb://localhost:27017/networknet_db', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB');
});

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', thoughtRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});