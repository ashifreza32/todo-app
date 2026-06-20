const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000;

require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

require('dotenv').config();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const todoRoutes = require('./routes/todoRoutes');
app.use('/api', todoRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})

