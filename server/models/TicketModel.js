const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    // ticket info
    title: String,
    description: String,

    // ownerships
    owner: String,
    project: String,
    assignee: String,

    // metadata
    status: String,
    category: String,
    priority: String,
    due: String,
    pinned: Boolean,
  },
  { collection: "tickets", timestamps: true }
);
TicketSchema.index({ title: "text", description: "text" });

const TicketModel = mongoose.model("TicketModel", TicketSchema);
module.exports = TicketModel;
