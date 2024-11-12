function homapageGet(req, res) {
  res.render("index", { title: "Inventory application" });
}

module.exports = {
  homapageGet,
};
