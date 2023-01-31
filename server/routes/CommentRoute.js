const {
  newComment,
  endpoints,
  updateComment,
  deleteComment,
  ticketComments,
} = require("../controllers/CommentController");

const router = require("express").Router();

// default response
router.get("/", endpoints);

// post a new comment
router.post("/newComment", newComment);

// update a comment
router.patch("/updateComment", updateComment);

// delete a comment
router.delete("/deleteComment", deleteComment);

// find all comments for a ticket
router.get("/ticketComments", ticketComments);

module.exports = router;
