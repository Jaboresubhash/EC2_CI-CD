require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express + Node!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on EC2 🚀 http://0.0.0.0:${PORT}`);
});

// ======================

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => console.log("Connected to RDS ✅"))
  .catch(err => console.error("DB Error ❌", err));