const express = require("express");
const { homapageGet } = require("../controllers/indexController");

const indexRouter = express.Router();

indexRouter.get("/", homapageGet);

module.exports = indexRouter;
