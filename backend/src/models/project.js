// models/Project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  githubLink: { type: String },
  liveDemo: { type: String },
  details: { type: [String] },
  image: { type: String }, // store image filename or path
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);
