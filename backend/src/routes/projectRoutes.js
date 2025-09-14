// routes/projects.js
const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const upload = require("../middleware/upload");
const projectController = require("../controllers/projectController");

// Create project with image
router.post("/", upload.single("image"), projectController.createProject);

// Get projects
router.get("/", projectController.getProjects);

router.put("/:id/image", upload.single("image"), projectController.updateProjectImage);

module.exports = router;
