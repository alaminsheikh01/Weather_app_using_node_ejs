const express = require("express");

const app = express();

// Middleware
app.use(express.static("public"));

// Use view engine
app.set("view engine", "ejs");

// Middleware routes
app.use("/", require("./routes/weatherRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
