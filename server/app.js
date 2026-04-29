const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/Contact.routes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    methods: ["GET", "POST"],
  })
);

app.use("/api/contact", contactRoutes);

module.exports = app;