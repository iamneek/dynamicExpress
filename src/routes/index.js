const router = require("express").Router();

const bannerRoutes = require("./banner.routes");
app.use("/banner", bannerRoutes);
module.exports = router;
