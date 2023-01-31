const commentModel = require("../models/CommentModel");

// default response
exports.endpoints = (req, res) => {
  let endpoints = {
    newComment: {
      method: "POST",
      description: "Inserts a new comment into the comments collection.",
    },
  };
  res.status(200).json({ endpoints: endpoints });
};

// insert a new comment into the database
exports.newComment = (req, res) => {
  new commentModel({
    comment: req.body.comment,
    owner: req.body.owner,
    ticket: req.body.ticket,
  }).save(function (err, comment) {
    if (err)
      res.status(500).json({
        message: "There was an error posting your comment.",
      });
    else
      res.status(200).json({
        status: `Comment ID ${comment._id} was posted successfully.`,
      });
  });
};

//Update a comment with new information
exports.updateComment = (req, res) => {
  let comment = {
    comment: req.body.comment,
    owner: req.body.owner,
    ticket: req.body.ticket,
  };
  // noinspection JSUnusedLocalSymbols
  commentModel.findByIdAndUpdate(
    req.query.commentID,
    comment,
    { new: true },
    (err, comment) => {
      if (err)
        res
          .status(500)
          .json({ message: "There was an error updating your comment." });
      else
        res.status(200).json({
          status: `Comment ${req.query.commentID} was successfully updated.`,
          comment: comment,
        });
    }
  );
};

//Delete a comment given its ID
exports.deleteComment = (req, res) => {
  commentModel.findByIdAndDelete(req.query.commentID, (err, comment) => {
    if (err)
      res
        .status(500)
        .json({ message: "There was an error deleting your comment." });
    else res.status(200).json({ status: `Comment was deleted successfully.` });
  });
};

//Retrieve all comments under a given ticket ID and sort by date in descending order
exports.ticketComments = (req, res) => {
  commentModel
    .find({ ticket: req.query.ticketID })
    .sort({ createdAt: -1 })
    .exec((err, comments) => {
      if (err)
        res
          .status(500)
          .json({ message: "There was an error retrieving your comments." });
      else res.status(200).json(comments);
    });
};
