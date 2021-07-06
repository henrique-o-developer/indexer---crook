const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.get("/ram", async(req, res) => {
    try {
        res.send("a'm running");
    } catch(err) {
        delete err
    }
})


server.listen(3000);
