const router = require("express").Router();

const controller = require("../controllers/weatherControllers");

router.get("/", controller.weatherGet);

router.post("/", controller.weatherPost);

module.exports = router;
