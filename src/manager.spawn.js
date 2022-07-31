const StructureMission = require("mission.structure");

class SpawnManager {

    constructor(name) {
        this.name = name;
    }

    run(roomMissionManager) {
        const spawn = Game.spawns[this.name];

        //spawn creep
        if (!spawn.spawning && roomMissionManager.hasSpawnMission()) {
            const spawnMission = roomMissionManager.getFirstSpawnMission();
            if (spawnMission && spawn.spawnCreep(spawnMission.creepBody, spawnMission.creepName) === OK) {
                roomMissionManager.finishFirstSpawnMission();
            }
        }

        //publish transport mission
        if (spawn.store.getFreeCapacity(RESOURCE_ENERGY) !== 0) {
            const transportMission =
                new StructureMission(StructureMission.MissionType.TRANSPORT_MISSION, spawn.structureType, spawn.id)
                    .setResourceType(RESOURCE_ENERGY)
                    .setResourceAmount(spawn.store.getFreeCapacity(RESOURCE_ENERGY))
                    .setResourceReserved(0);
            if (!roomMissionManager.hasStructureMission(transportMission)) {
                roomMissionManager.addStructureMission(transportMission);
            }
        }

        //publish repair mission
        if (spawn.hitsMax !== spawn.hits) {
            const repairMission = new StructureMission(StructureMission.MissionType.REPAIR_MISSION, spawn.structureType, spawn.id);
            if(!roomMissionManager.hasStructureMission(repairMission)) {
                roomMissionManager.addStructureMission(repairMission);
            }
        }
    }

}

module.exports = SpawnManager;
