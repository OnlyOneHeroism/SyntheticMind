const MemoryManager = require("src/editor.memory");

class HarvestMissionManager {
    static setHarvestMission(sourceId, amount, roomName) {
        if (!Memory.rooms[roomName].harvestMission) {
            Memory.rooms[roomName].harvestMission = [];
        }

        const missions = MemoryManager.getHarvestMission(roomName);
        const mission = missions.find(value => {
            return value.targetId === sourceId;
        });

        if (mission) {
            mission.amount = amount;
        } else {
            let maxReservedPosition = 0;
            missions.push({
                "targetId": sourceId,
                "amount": amount,
                "reserved": 0,
                "reservedAmount": 0,
                "maxReservedPosition": maxReservedPosition
            });
        }
    }



}

module.exports = HarvestMissionManager;