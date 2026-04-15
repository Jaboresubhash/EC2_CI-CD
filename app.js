const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express + Node!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on EC2 🚀 http://0.0.0.0:${PORT}`);
});