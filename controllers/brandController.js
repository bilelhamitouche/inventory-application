const db = require("../db/queries");

async function listBrands(req, res) {
  const brands = await db.getBrands();
  res.render("brands", { title: "Brands", brands: brands });
}

async function listModelsPerBrand(req, res) {
  const { id } = req.params;
  const models = await db.getModelsPerBrand(parseInt(id));
  res.render("brandModels", { title: "Brand models", models: models });
}

async function createBrandGet(req, res) {
  res.render("createBrand", { title: "Create brand" });
}

async function createBrandPost(req, res) {
  const { name, country, logo } = req.body;
  await db.insertBrand(name, country, logo);
  res.redirect("/brands");
}

async function deleteBrand(req, res) {
  const { id } = req.params;
  await db.deleteBrand(id);
  res.redirect("/brands");
}

module.exports = {
  listBrands,
  listModelsPerBrand,
  createBrandGet,
  createBrandPost,
  deleteBrand,
};
