var kaop = require("kaop");
var korm = require("korm");
var http = require("http");
var pkg = require("./package");

var nodeInstance, ormInstance, initSuccess;

nodeInstance = http.createServer();
nodeInstance.listen(pkg.cfg.port);

ormInstance = korm;
initSuccess = ormInstance.open(pkg.cfg, pkg.cfg.models);

kaop.Decorators.locals = {
    $$nodeInstance: nodeInstance,
    $$ormInstance: ormInstance
};

module.exports = initSuccess;
