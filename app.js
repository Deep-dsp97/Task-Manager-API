const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const port = 3000;

app.use(express.static('./public'));
// Middleware
app.use(express.json()); // Need to use this to get data in req.body 

app.use('/api/v1/tasks', tasks);

//  DB connectin and App server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, (req, res) => {
            console.log(`server is listening at port ${port}..`);
        })
    } catch (error) {
        console.log(error);       
    }
}

start()