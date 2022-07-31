const MemoryEditor = require("editor.memory");
const MemoryKey = require("key.memory");
const SpawnMission = require("mission.spawn");
const StructureMission = require("mission.structure");

class RoomMissionManager {

    constructor(name) {
        this.name = name;
        this.roomMemoryEditor = MemoryEditor.getRoomMemoryEditor(this.name);
    }

    hasSpawnMission() {
        return this.getSpawnMissionQueue().length > 0;
    }

    getSpawnMissionQueue() {
        return this.roomMemoryEditor.getListEditor(MemoryKey.SPAWN_MISSION_QUEUE).getAsList();
    }

    getFirstSpawnMission() {
        return SpawnMission.fromObject(this.getSpawnMissionQueue()[0]);
    }

    finishFirstSpawnMission() {
        this.getSpawnMissionQueue().shift();
    }

    hasStructureMission(structureMission) {
        switch (structureMission.missionType) {
            case StructureMission.MissionType.TRANSPORT_MISSION:
                return this.roomMemoryEditor
                    .getListEditor(structureMission.structureType)
                    .getListEditor(structureMission.structureId)
                    .getListEditor(MemoryKey.TRANSPORT_MISSION_QUEUE)
                    .getAsList().findIndex(mission => mission.resourceType === structureMission.resourceType) !== -1;

            case StructureMission.MissionType.REPAIR_MISSION:
                return this.roomMemoryEditor
                    .getListEditor(MemoryKey.REPAIR_MISSION_QUEUE)
                    .getAsList()
                    .findIndex(mission => mission.structureId === structureMission.structureId) !== -1;
            default:
                return false;
        }
    }

    addStructureMission(structureMission) {
        switch (structureMission.missionType) {
            case StructureMission.MissionType.TRANSPORT_MISSION:
                this.roomMemoryEditor
                    .getListEditor(MemoryKey.TRANSPORT_MISSION_QUEUE)
                    .getAsList()
                    .push(structureMission.toRoomMissionQueueElement());

                this.roomMemoryEditor
                    .getMapEditor(structureMission.structureType)
                    .getMapEditor(structureMission.structureId)
                    .getListEditor(MemoryKey.TRANSPORT_MISSION_QUEUE)
                    .getAsList()
                    .push(structureMission.toStructureMissionQueueElement());
                break;
            case StructureMission.MissionType.REPAIR_MISSION:
                this.roomMemoryEditor
                    .getListEditor(MemoryKey.REPAIR_MISSION_QUEUE)
                    .getAsList()
                    .push(structureMission.toRoomMissionQueueElement());
        }
    }

    structureHasRepairMission(structureId) {
        return this.roomMemoryEditor.getListEditor(MemoryKey.REPAIR_MISSION_QUEUE).getAsList().includes(structureId);
    }

    creepIsSpawningInQueue(name) {
        return MemoryEditor.getCreepMemoryEditor(name).spawningInQueue;
    }

    setCreepIsSpawningInQueue(name, value) {
        MemoryEditor.getCreepMemoryEditor(name).spawningInQueue = value;
    }

    addSpawnMissionToQueue(creepName, creepBody) {
        if (!this.creepIsSpawningInQueue(creepName)) {
            const spawnMission = {
                "name": creepName,
                "body": creepBody
            };
            this.getSpawnMissionQueue().push(spawnMission);
            this.setCreepIsSpawningInQueue(creepName, true);
        }
    }

    getTransportMission(id) {
        const objectMemory = MemoryEditor.getMapMemoryFromRoom(id, this.name);
    }

}

module.exports = RoomMissionManager;
