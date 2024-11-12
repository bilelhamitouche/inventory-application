const express = require("express");
const {
  listModels,
  createModelGet,
} = require("../controllers/modelController");

const modelRouter = express.Router();

modelRouter.get("/", listModels);
modelRouter.get("/create", createModelGet);

module.exports = modelRouter;
