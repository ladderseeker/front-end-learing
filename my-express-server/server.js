const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: laddseeker@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("<strong><em>A strong ladderSeeker.</em></strong>");
});

app.listen(7000, function () {
    console.log("Server started on 7000");
});