const path = require("path");

function getHome (req,res){
let pathHome = path.join(__dirname, "../../public/index.html");
res.sendFile(pathHome);
}

module.exports ={
    getIndex : getIndex
}