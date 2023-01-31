const {
  newProject,
  endpoints,
  userProjects,
  searchProjects,
  editableProjects,
  addCollaborator,
  editProject,
} = require("../controllers/ProjectController");

const router = require("express").Router();

// default
router.get("/", endpoints);

// create a new project
router.post("/newProject", newProject);

// find all projects owned by a user
router.get("/userProjects", userProjects);

// search for projects that contain a string
router.get("/searchProjects", searchProjects);

//return a list of projects that the user can edit
router.get("/editableProjects", editableProjects);

//Let a user edit a project
router.patch("/addCollaborator", addCollaborator);

//edit a project's title and description
router.patch("/editProject", editProject);

module.exports = router;
