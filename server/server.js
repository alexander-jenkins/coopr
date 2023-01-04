// project dependencies
const express = require('express');
const path = require('path');
require('dotenv').config();
const compression = require('compression');
const mongoose = require('mongoose');
exports.mongo_model = mongoose.model;
const cors = require('cors');

// connect to the mongo database
mongoose.connect(process.env.MONGO_HOST)
    .catch((error) => console.log(error));
mongoose.connection.on('connected', () => {
    console.log(`Mongoose successfully connected to ${process.env.MONGO_HOST}`);
});

// set up express app
const app = express();
app.use(
    compression(),
    express.json(),
    cors({
        origin: ['https://coopr.dev', 'http://127.0.0.1:3000'],
    }),
    express.static(path.resolve(__dirname, '../client/dist'))
);

// tickets
const ticket = require('./routes/ticket');
app.use('/api/ticket', ticket);

// comments
const comment = require('./routes/comment');
app.use('/api/comment', comment);

// projects
const project = require('./routes/project');
app.use('/api/project', project);

// base API endpoint
const api = require('./routes/api');
app.use('/api', api);

// all other GET requests not already handled will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// have Express listen for requests
app.listen(
    3000,
    ()=>{
        let greeting = 'The Coopr.dev server is starting...'
        let mongo = `Mongoose will try connecting to: ${process.env.MONGO_HOST}`
        let express = `Express is listening at: http://127.0.0.1:3000`
        console.log(`${greeting}\n${express}\n${mongo}`)
    }
);
