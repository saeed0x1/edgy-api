const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.readFile("index.html", (err, data) => {
      if (err) {
        return console.error(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/api/joke") {
    res.writeHead(200, { "content-type": "application/json" });
    const readStream = fs.createReadStream("data.json");
    readStream.pipe(res);
  
} else if (req.url == "/api/joke/random") {
    res.writeHead(200, { "content-type": "application/json" });
    fs.readFile("data.json","utf-8",(err,data)=>{
        if(err){
            return console.error(err)
        }else{
            let jsonToObject = JSON.parse(data)
            let randomNum = Math.round(Math.random()*jsonToObject.length)
            res.write(jsonToObject[randomNum].body)
            res.end()
        }
    })

  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 page not found");
  }
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
