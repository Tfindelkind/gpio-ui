const express = require("express");
const os = require("os");
const app = express();
const Gpio = require('onoff').Gpio;

const gpio4 = new Gpio(4, 'out');
const gpio17 = new Gpio(17, 'out');

var gpio4_state=gpio4.readSync();
var gpio17_state=gpio17.readSync();

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

app.get("/api/gpio4/state", (req, res) => {
  gpio4_state=gpio4.readSync();
  res.send(gpio4_state ? "1" : "0");
 }
);



app.get("/api/gpio17/state", (req, res) => {
  gpio17_state=gpio17.readSync();
  res.send(gpio17_state ? "1" : "0");
 }
);

app.post("/api/gpio4/on",function(req,res){
  gpio4.writeSync(1);
  res.end("GPIO 4 ON");
});

app.post("/api/gpio4/off",function(req,res){
  gpio4.writeSync(0);
  res.end("GPIO 4 OFF");
});

app.post("/api/gpio17/on",function(req,res){
  gpio17.writeSync(1);
  res.end("GPIO 17 ON");
});

app.post("/api/gpio17/off",function(req,res){
  gpio17.writeSync(0);
  res.end("GPIO 17 OFF");
});


app.listen(9090, () => console.log("Listening on port 9090!"));
