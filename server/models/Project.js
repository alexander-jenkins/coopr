const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    // project info
    title: String,
    description: String,

    // ownerships
    owner: String,
    collaborators: [String],
  },
  { collection: "projects", timestamps: true }
);
ProjectSchema.index({ title: "text", owner: "text", collaborators: "text" });

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
