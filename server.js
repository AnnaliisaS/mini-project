var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

var person = {
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: ''
}

var reservationList = [];
var waitingList = [];


app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
    console.log('Table page');

});
app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
    console.log("View table page");

});
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    console.log("View table page");

});
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
