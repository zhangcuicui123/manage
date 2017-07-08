const express = require('express');
const app = express();
var UserInfo = require("./controller/UserInfoController.js");

app.use(express.static("static"))
    // const router = 

// app.use()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/add", function(req, res) {
    res.sendFile(__dirname + "/views/add.html");
})

app.get("/insert", UserInfo.insert);
app.get("/all", UserInfo.all);

app.listen(3000);