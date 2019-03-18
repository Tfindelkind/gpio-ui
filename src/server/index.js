const express = require("express");
const os = require("os");
const app = express();
const gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_OUT);
gpio.setup(11, gpio.DIR_OUT);

app.use(express.static("dist"));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


 app.get("/api/getInfo", (req, res) =>
  res.send("API 1.0 of gpio-ui")
);

app.post("/api/gpio7/on",function(req,res){
  gpio.write(7, true, function(err) {
        if (err) throw err;
    });
  res.end("GPIO 7 ON");
});

app.post("/api/gpio7/off",function(req,res){
  gpio.write(7, false, function(err) {
        if (err) throw err;
    });
  res.end("GPIO 7 OFF");
});

app.post("/api/gpio11/on",function(req,res){
  gpio.write(11, true, function(err) {
        if (err) throw err;
    });
  res.end("GPIO 11 ON");
});

app.post("/api/gpio11/off",function(req,res){
  gpio.write(11, false, function(err) {
        if (err) throw err;
    });
  res.end("GPIO 11 OFF");
});


app.listen(9090, () => console.log("Listening on port 9090!"));
