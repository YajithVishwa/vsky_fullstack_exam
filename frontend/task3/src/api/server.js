const express = require("express");
const cors = require("cors");
const custom_routes = require("./endpoints/index");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", custom_routes);

app.get("/", (req, res) => res.send("server is healthy"));

app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}`);
});
