const pool = require("./pool");

async function getBrands() {
  const { rows } = await pool.query("SELECT * FROM brand");
  return rows;
}

async function insertBrand(name, country, logo) {
  await pool.query("INSERT INTO brand (name, country, logo) VALUES ($1)", [
    name,
    country,
    logo,
  ]);
}

async function getModels() {
  const { rows } = await pool.query(
    "SELECT brand.name AS brand_name, model.name AS model_name, model.year, model.price, model.image FROM brand JOIN model ON brand.id = model.brand_id",
  );
  return rows;
}

async function insertModel(name, year, price, brand_id, image) {
  await pool.query("INSERT INTO brand (name, country, logo) VALUES ($1)", [
    name,
    year,
    price,
    brand_id,
    image,
  ]);
}

module.exports = {
  getModels,
  insertModel,
  getBrands,
  insertBrand,
};
