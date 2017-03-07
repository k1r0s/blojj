var kaop = require("kaop");

kaop.Decorators.push(
    kaop.Phase.INSTANCE,
    function resourceController(attributeUri){
        $$nodeInstance.on("request", function(req, res) {
            if(req.url === this[attributeUri]){
                this[req.method.toLocaleLowerCase()].call(this, res, req);
            }
        });
    }
);

kaop.Decorators.push(
    kaop.Phase.EXECUTE,
    function dataAssambly(){

    }
);
