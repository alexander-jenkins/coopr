const mongoose = require('mongoose');

const Project = new mongoose.Schema(
    {
        // project info
        title: String,
        description: String,

        // ownerships
        owner: String,
        collaborators: [String],
    },
    { collection: 'projects', timestamps: true }
);

Project.index({title: 'text', owner: 'text', collaborators: 'text'});

module.exports = Project;
