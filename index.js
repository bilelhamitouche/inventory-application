const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const brandRouter = require("./routes/brandRouter");
const modelRouter = require("./routes/modelRouter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", indexRouter);
app.use("/brands", brandRouter);
app.use("/models", modelRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
