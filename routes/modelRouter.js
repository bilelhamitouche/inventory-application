const express = require("express");
const {
  listModels,
  createModelGet,
  createModelPost,
  deleteModel,
} = require("../controllers/modelController");

const modelRouter = express.Router();

modelRouter.get("/", listModels);
modelRouter.get("/create", createModelGet);
modelRouter.post("/create", createModelPost);
modelRouter.post("/:id/delete", deleteModel);

module.exports = modelRouter;
