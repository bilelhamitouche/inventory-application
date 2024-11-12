const db = require("../db/queries");

async function listModels(req, res) {
  const models = await db.getModels();
  res.render("models", { title: "Models", models: models });
}

async function createModelGet(req, res) {
  res.render("createModel", { title: "Create model" });
}

module.exports = {
  listModels,
  createModelGet,
};
