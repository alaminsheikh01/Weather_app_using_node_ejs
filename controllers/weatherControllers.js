const fetch = require("node-fetch");

exports.weatherGet = (req, res) => {
  res.render("index", {
    city: null,
    des: null,
    icon: null,
    temp: null,
  });
};

exports.weatherPost = (req, res) => {
  const city = req.body.city;
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

  try {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "city not found") {
          res.render("index", {
            city: data.message,
            des: null,
            icon: null,
            temp: null,
          });
        } else {
          const city = data.name;
          const des = data.weather[0].description;
          const icon = data.weather[0].icon;
          const temp = data.main.temp;

          res.render("index", {
            city,
            des,
            icon,
            temp,
          });
        }
      });
  } catch (err) {
    res.render("index", {
      city: "something wrong",
      icon: null,
      temp: null,
      des: null,
    });
  }
};
