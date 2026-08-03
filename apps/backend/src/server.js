const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    application: "Logicore Platform",
    version: "1.0.0",
    message: "Logicore Backend API is running.",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Logicore backend running on port ${PORT}`);
});
