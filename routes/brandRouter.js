const express = require("express");
const {
  listBrands,
  createBrandGet,
} = require("../controllers/brandController");

const brandRouter = express.Router();

brandRouter.get("/", listBrands);
brandRouter.get("/create", createBrandGet);

module.exports = brandRouter;
