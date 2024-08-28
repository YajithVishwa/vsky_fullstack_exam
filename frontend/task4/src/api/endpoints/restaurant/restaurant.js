const express = require("express");

const router = express.Router();
let restaurantRatings = [
  {
    name: "Gome",
    phone_number: 123456789,
    address: "4, Test Street, Test City, Test 624592",
    rating: "4.5",
  },
  {
    name: "Prince",
    phone_number: 123456789,
    address: "4, Test Street, Test City, Test 624592",
    rating: "3.0",
  },
];

router.get("/", async (req, res) => {
  try {
    return res.json(restaurantRatings);
  } catch (error) {
    return res.status(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    if (typeof payload === "object") {
      restaurantRatings.push(payload);
    }
    return res.json(restaurantRatings);
  } catch (error) {
    return res.status(500);
  }
});

module.exports = router;
