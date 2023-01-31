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

const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
