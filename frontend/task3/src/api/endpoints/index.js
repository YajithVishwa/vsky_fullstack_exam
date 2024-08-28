const restaurantRoutes = require("./restaurant/restaurant");
const express = require("express");

const router = express.Router();

router.use("/restaurant", restaurantRoutes);

module.exports = router;
