const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");

app.use(express.json());
app.use("/api/schools", schoolRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

module.exports = app;
