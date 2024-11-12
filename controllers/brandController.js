const db = require("../db/queries");

async function listBrands(req, res) {
  const brands = await db.getBrands();
  res.render("brands", { title: "Brands", brands: brands });
}

async function createBrandGet(req, res) {
  res.render("createBrand", { title: "Create brand" });
}

module.exports = {
  listBrands,
  createBrandGet,
};
