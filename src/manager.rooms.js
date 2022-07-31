const RoomManager = require("manager.room");

class RoomsManager {

    constructor() {
        this.roomManagers = [];
    }

    putRoomData(roomData) {
        this.roomManagers.push(new RoomManager(roomData));
    }

    runAll() {
        for (let i = 0; i < this.roomManagers.length; i++) {
            this.roomManagers[i].run();
        }
    }

}

module.exports = RoomsManager;
