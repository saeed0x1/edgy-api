const express = require("express");
const path = require("path");
const data = require("./data.json");
const rateLimiter = require("express-rate-limit");
const app = express();

const port = process.env.PORT || 3000;
const indexPath = path.join(__dirname, "../index.html");


const limiter = rateLimiter({
	windowMs: 10 * 60 * 1000, 
	max: 20, 
  message: "chill bro you are sending too many requests. :)",
	standardHeaders: true,
	legacyHeaders: false,
})

app.use(limiter);

app.get("/", (req, res) => {
  res.status(200);
  res.contentType("text/html");
  res.sendFile(indexPath);
});

app.get("/api/joke", (req, res) => {
  let randomNum = Math.round(Math.random() * data.length);
  let jsonString = JSON.stringify(data[randomNum]);
  res.contentType("application/json")
  res.send(jsonString);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
