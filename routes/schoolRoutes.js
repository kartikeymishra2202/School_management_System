const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const validateRequest = require("../middleware/validateRequest");

router.post("/addSchool", validateRequest, schoolController.addSchool);
router.get("/listSchools", schoolController.listSchools);

module.exports = router;
