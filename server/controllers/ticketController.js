const ticketModel = require('../models/ticketModel');
const commentModel = require('../models/commentModel');

// provide the endpoint description
exports.description = (req, res) => {
    let endpoints = {
        newTicket: {
            method: 'POST',
            description: 'Inserts a new ticket into the tickets collection.',
        },
    };
    res.status(200).json({ endpoints: endpoints });
};

// insert a ticket into the database
exports.newTicket = (req, res) => {
    new ticketModel({
        title: req.body.title,
        description: req.body.description,
        owner: req.body.owner,
        project: req.body.project,
        assignee: req.body.assignee,
        status: req.body.status,
        category: req.body.category,
        priority: req.body.priority,
        due: req.body.due,
        pinned: req.body.pinned,
    }).save(function (err, ticket) {
        if (err) res.status(500).json({message: 'There was an error creating your ticket.'});
        else res.status(200).json({status: `Ticket ID ${ticket._id} was created successfully.`});
    });
};

// find tickets given a projectID
exports.projectTickets = (req, res) => {
    ticketModel
        .find({ project: req.query.projectID }, 'title description')
        .sort('__updatedAt')
        .exec((err, tickets) => {
            if (err) console.error(err);
            res.status(200).json(tickets);
        });
};

//Update a ticket given a ticketID
exports.updateTicket = (req, res) => {
    ticketModel.findByIdAndUpdate(
        req.query.ticketID,
        {
            title: req.body.title,
            description: req.body.description,
            owner: req.body.owner,
            project: req.body.project,
            assignee: req.body.assignee,
            status: req.body.status,
            category: req.body.category,
            priority: req.body.priority,
            due: req.body.due,
            pinned: req.body.pinned,
        },
        {new: true}, // returns the new ticket instead of before updates
        (err, ticket) => {
            if (err) res.status(500).json({status: 'There was an error updating your ticket.'});
            else res.status(200).json({status: 'Ticket was updated to contain the following new values:', ticket: ticket});
        }
    );
};

//Delete a ticket given an ID and delete all comments associated with that ticket
exports.deleteTicket = (req, res) => {
    ticketModel.findByIdAndDelete(req.query.ticketID,
        (err, ticket) => {
            if (err) res.status(500).json({message: 'There was an error deleting your ticket.'});
            else{
                //Delete all comments associated with the ticket
                commentModel.deleteMany({ ticket: req.query.ticketID},
                    (err, comment) => {
                        if (err) res.status(500).json({message: 'There was an error deleting your comments.'})
                    });
                res.status(200).json({status: `Ticket ID ${req.query.ticketID} was deleted successfully.`});
            }
        });
}

