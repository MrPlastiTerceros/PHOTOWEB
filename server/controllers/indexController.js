const path = require("path");

function getIndex (req,res){
let pathIndex = path.join(__dirname, "../../public/index.html");
res.sendFile(patIndex);
}

module.exports ={
    getIndex : getIndex
}