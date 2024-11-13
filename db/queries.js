const pool = require("./pool");

async function getBrands() {
  const { rows } = await pool.query("SELECT * FROM brand ORDER BY name ASC");
  return rows;
}

async function getModelsPerBrand(brand_id) {
  const { rows } = await pool.query(
    "SELECT * FROM model WHERE brand_id = ($1)",
    [brand_id],
  );
  return rows;
}

async function insertBrand(name, country, logo) {
  await pool.query(
    "INSERT INTO brand (name, country, logo) VALUES ($1, $2, $3)",
    [name, country, logo],
  );
}

async function deleteBrand(id) {
  await pool.query("DELETE FROM model WHERE brand_id = ($1)", [id]);
  await pool.query("DELETE FROM brand WHERE id = ($1)", [id]);
}

async function getModels() {
  const { rows } = await pool.query(
    "SELECT model.id, brand.name AS brand_name, model.name AS model_name, model.year, model.price, model.image FROM brand JOIN model ON brand.id = model.brand_id",
  );
  return rows;
}

async function insertModel(name, year, price, brand_id, image) {
  await pool.query(
    "INSERT INTO model (name, year, price, brand_id, image) VALUES ($1, $2, $3, $4, $5)",
    [name, year, price, brand_id, image],
  );
}

async function deleteModel(id) {
  await pool.query("DELETE FROM model WHERE id = ($1)", [id]);
}

module.exports = {
  getModels,
  insertModel,
  getBrands,
  getModelsPerBrand,
  insertBrand,
  deleteBrand,
  insertModel,
  deleteModel,
};
