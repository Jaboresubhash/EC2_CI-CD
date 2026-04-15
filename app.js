require("dotenv").config();
const express = require("express");
const { Client } = require("pg");

const app = express();
const PORT = 3000;

console.log("DB URL:", process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect()
  .then(() => {
    console.log("Connected to RDS ✅");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on EC2 🚀 http://0.0.0.0:${PORT}`);
    });
  })
  .catch(err => {
    console.error("DB Error ❌", err);
  });

app.get("/", (req, res) => {
  res.send("Hello from Express + Node!");
});