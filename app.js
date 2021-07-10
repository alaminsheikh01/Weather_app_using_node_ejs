const express = require("express");

const app = express();

app.use("/", require("./routes/weather"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
