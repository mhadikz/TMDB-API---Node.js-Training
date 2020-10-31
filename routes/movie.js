const express = require("express");
const router = express.Router();
const moveController = require("../controllers/movieController");

router.get("/", moveController);

module.exports = router;
