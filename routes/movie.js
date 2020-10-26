const express = require("express");
const router = express.Router();
const moveController = require("../controllers/movieController");

router.post("/", moveController.getMovieDetail);

module.exports = router;
