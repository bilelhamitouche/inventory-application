const db = require("../db/queries");

async function listModels(req, res) {
  const models = await db.getModels();
  res.render("models", { title: "Models", models: models });
}

async function createModelGet(req, res) {
  const brands = await db.getBrands();
  res.render("createModel", { title: "Create model", brands: brands });
}

async function createModelPost(req, res) {
  const { name, year, price, brand_id, image } = req.body;
  await db.insertModel(name, year, price, parseInt(brand_id), image);
  res.redirect("/models");
}

async function deleteModel(req, res) {
  const { id } = req.params;
  await db.deleteModel(id);
  res.redirect("/models");
}

module.exports = {
  listModels,
  createModelGet,
  createModelPost,
  deleteModel,
};
