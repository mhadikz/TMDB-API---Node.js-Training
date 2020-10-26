const express = require("express");
const router = express.Router();
const trailerController = require("../controllers/trailerController");

router.post("/", trailerController.youTubeTrailerList);

module.exports = router;
