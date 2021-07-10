const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello express");
});

module.exports = router;
