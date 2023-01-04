const mongoose = require('mongoose');

const Comment = new mongoose.Schema(
    {
        // comment info
        comment: String,

        // ownerships
        owner: String,
        ticket: String,
    },
    { collection: 'comments', timestamps: true }
);

Comment.index({});

module.exports = Comment;
