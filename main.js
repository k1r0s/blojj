var kaop = require("kaop")

var Controller =

function init(){
    console.log("bootstraping..");
    require("./services").then(postInit);
}

function postInit(){
    console.log("postinit done!");
    require("./aspects");
    //TODO init controller
}

init();
