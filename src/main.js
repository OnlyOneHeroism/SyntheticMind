const e42s45 = require("data.e42s45");
const e8s4 = require("data.e8s4");
const RoomsManager = require("manager.rooms");

let manager = new RoomsManager();
manager.putRoomData(e8s4);

module.exports.loop = function () {
    manager.runAll();
}
