const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");

app.use(express.json());
app.use("/api/schools", schoolRoutes);

module.exports = app;
