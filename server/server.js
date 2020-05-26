const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");

const HomeController = require("./controllers/indexController");




app.get("/", HomeController.getIndex);


app.listen(5500, function() {
    console.log("Puerto 5500 habilitado");
});