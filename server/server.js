// project dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors");

// connect to the mongo database
mongoose.connect(process.env.MONGO_HOST).catch((error) => console.log(error));
mongoose.connection.on("connected", () => {
    console.log(`Mongoose successfully connected to ${process.env.MONGO_HOST}`);
});

// set up express app
const app = express();
app.use(
    compression(),
    express.json(),
    cors({
        origin: ["https://coopr.dev", "http://127.0.0.1:3000"],
    })
);

// tickets
const ticket = require("./routes/TicketRoute");
app.use("/api/ticket", ticket);

// comments
const comment = require("./routes/CommentRoute");
app.use("/api/comment", comment);

// projects
const project = require("./routes/ProjectRoute");
app.use("/api/project", project);

// users
const user = require("./routes/UserRoute");
app.use("/api/user", user);

// base API endpoint
const api = require("./routes/ApiRoute");
app.use("/api", api);

// have Express listen for requests
app.listen(3000, () => {
    let greeting = "The Coopr.dev server is starting...";
    let mongo = `Mongoose will try connecting to: ${process.env.MONGO_HOST}`;
    let express = `Express is listening at: http://127.0.0.1:3000`;
    console.log(`${greeting}\n${express}\n${mongo}`);
});
