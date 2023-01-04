const mongoose = require('mongoose');

const Ticket = new mongoose.Schema(
    {
        // ticket info
        title: String,
        description: String,

        // ownerships
        // owner: mongoose.Schema.Types.ObjectId,
        // project: mongoose.Schema.Types.ObjectId,
        // assignee: mongoose.Schema.Types.ObjectId,
        owner: String,
        project: String,
        assignee: String,

        // metadata
        status: String,
        category: String,
        priority: String,
        // due: Date,
        due: String,
        pinned: Boolean,
    },
    { collection: 'tickets', timestamps: true }
);

Ticket.index({ title: 'text', description: 'text' });

module.exports = Ticket;
