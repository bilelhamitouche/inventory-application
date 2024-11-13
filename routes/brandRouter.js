const express = require("express");
const {
  listBrands,
  createBrandGet,
  createBrandPost,
  deleteBrand,
  listModelsPerBrand,
} = require("../controllers/brandController");

const brandRouter = express.Router();

brandRouter.get("/", listBrands);
brandRouter.get("/create", createBrandGet);
brandRouter.post("/create", createBrandPost);
brandRouter.get("/:id", listModelsPerBrand);
brandRouter.post("/:id/delete", deleteBrand);

module.exports = brandRouter;
