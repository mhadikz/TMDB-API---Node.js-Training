const express = require("express");
const router = express.Router();
const moveController = require("../controllers/movieController");

router.get("/", moveController.getMovieDetail);

module.exports = router;
