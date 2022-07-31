const SpawnManager = require("manager.spawn");
const SourceManager = require("manager.source");
const CreepManager = require("manager.creep");
const RoomMissionManager = require("manager.mission.room");

class RoomManager {
    constructor(roomData) {
        this.name = roomData.name;
        this.data = roomData;

        this.spawnManagers = [];
        this.sourceManagers = [];
        this.creepManagers = [];

        this.roomMissionManager = new RoomMissionManager(this);

        for (const spawnName of this.data.spawnNames) {
            this.spawnManagers.push(new SpawnManager(spawnName));
        }
        for (const source of this.data.sources) {
            this.sourceManagers.push(new SourceManager(source.id));
        }
        for (const creep of this.data.creeps) {
            this.creepManagers.push(new CreepManager(creep.name));
        }
    }

    run() {
        for (const spawnManager of this.spawnManagers) {
            spawnManager.run(this.roomMissionManager);
        }
        for (const sourceManager of this.sourceManagers) {
            sourceManager.run(this.roomMissionManager);
        }
        for (const creepManager of this.creepManagers) {
            creepManager.run(this);
        }
    }

}

module.exports = RoomManager;
