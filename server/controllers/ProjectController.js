const projectModel = require('../models/ProjectModel');

// default response
exports.endpoints = (req, res) => {
    let endpoints = {
        newProject: {
            method: 'POST',
            description: 'Inserts a new project into the projects collection.',
        },
    };
    res.status(200).json({endpoints: endpoints});
};

// insert a new project into the database
exports.newProject = (req, res) => {
    new projectModel({
        title: req.body.title,
        description: req.body.description,
        owner: req.body.owner,
    }).save((err, project) => {
        if (err)
            res.status(500).json({
                status: 'An error occurred while creating your project.',
            });
        else
            res.status(200).json({
                status: `Project ID ${ project._id } was created successfully.`,
            });
    });
};

// get all projects owned by a user
exports.userProjects = (req, res) => {
    projectModel
        .find({owner: req.query.owner})
        .sort({createdAt: -1})
        .exec((err, projects) => {
            if (err)
                res
                    .status(500)
                    .json({status: 'An error occurred while finding your projects.'});
            else res.status(200).json(projects);
        });
};

//Search for a project given a string input.
//Note: this is not a search for a specific project, but a search for projects that contain the string input.
exports.searchProjects = (req, res) => {
    projectModel
        .find({$text: {$search: req.query.title}})
        .sort({createdAt: 'desc'})
        .exec((err, projects) => {
            if (err)
                res
                    .status(500)
                    .json({status: 'An error occurred while searching projects.'});
            else res.status(200).json(projects);
        });
};

//Return a list of projects that the user can edit
//This is a list of projects that the user owns, or projects that the user is a collaborator on.
exports.editableProjects = (req, res) => {
    let user = req.query.uid;
    projectModel
        .find({$or: [ {owner: user}, {collaborators: user} ]})
        .sort({updatedAt: -1})
        .exec((err, projects) => {
            if (err)
                res.status(500).json({
                    status: 'An error occurred while finding your projects.',
                });
            else {
                res.status(200).json(projects);
            }
        });
};

//Let a user edit a project
//We achieve this by adding the user to the collaborators list
exports.addCollaborator = (req, res) => {
    projectModel.findOneAndUpdate(
        {__id: req.query.projectID},
        {$push: {collaborators: req.body.uid}},
        (err, project) => {
            if (err)
                res.status(500).json({
                    status: 'An error occurred while editing your project.',
                });
            else {
                res.status(200).json({
                    status: `Project ID ${ req.query.projectID } was edited successfully.`,
                });
            }
        }
    );
};
//Replace the title and description of a project
exports.editProject = (req, res) => {
    projectModel.findOneAndUpdate(
        {_id: req.query.projectID},
        {title: req.body.title, description: req.body.description},
        (err, project) => {
            if (err)
                res
                    .status(500)
                    .json({status: 'An error occurred while editing your project.'});
            else
                res.status(200).json({
                    status: `Project ID ${ req.query.projectID } was edited successfully.`,
                });
        }
    );
};
