require("dotenv").config();
const express = require("express");
const { handleOptimize } = require("./controller");

const app = express();

app.get("/optimize", handleOptimize);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});