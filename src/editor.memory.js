const MemoryKey = require("key.memory");

class MemoryEditor {

    constructor(object) {
        this.object = object;
    }

    getMapEditor(key) {
        if (!this.object[key]) {
            this.object[key] = {};
        }
        return new MemoryEditor(this.object[key]);
    }

    getListEditor(key) {
        if (!this.object[key]) {
            this.object[key] = [];
        }
        return new MemoryEditor(this.object[key]);
    }

    getAsMap() {
        return this.object;
    }

    getAsList() {
        return this.object;
    }

    static getMemoryEditor() {
        return new MemoryEditor(Memory);
    }

    static getRoomsMemoryEditor() {
        return this.getMemoryEditor().getMapEditor(MemoryKey.ROOMS);
    }

    static getRoomMemoryEditor(roomName) {
        return this.getRoomsMemoryEditor().getMapEditor(roomName);
    }

    static getCreepsMemoryEditor() {
        return this.getMemoryEditor().getMapEditor(MemoryKey.CREEPS);
    }

    static getCreepMemoryEditor(creepName) {
        return this.getCreepsMemoryEditor().getMapEditor(creepName);
    }

}

module.exports = MemoryEditor;