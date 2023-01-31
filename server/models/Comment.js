const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    // comment info
    comment: String,

    // ownerships
    owner: String,
    ticket: String,
  },
  { collection: "comments", timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
