const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1><em>Hello there!</em></h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: palmuskaan5@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("My name is Muskaan Pal studying at Chitkara University.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul type= 'square'><li>Cooking</li><li>Dancing</li></ul>");
});

app.get("/skills", function(req, res) {
    res.send("<ul type = 'square'><li><em>HTML</em></li><li><em>CSS</em></li><li><em>Javascript</em></li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});