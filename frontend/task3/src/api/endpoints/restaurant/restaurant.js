const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const restaurantRatings = [
      {
        name: "Gome",
        rating: "4.5",
      },
      {
        name: "Prince",
        rating: "3.8",
      },
      {
        name: "Queen",
        rating: "4.0",
      },
    ];

    return res.json(restaurantRatings);
  } catch (error) {
    return res.status(500);
  }
});

module.exports = router;
