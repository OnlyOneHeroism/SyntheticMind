const HarvestMissionManager = require("manager.mission.harvest");

class SourceDriver {
    static driveSources(sourcesId, roomName) {
        for (const sourceId of sourcesId) {
            const source = Game.getObjectById(sourceId);
            HarvestMissionManager.setHarvestMission(sourceId, source.energy, roomName);
        }
    }
}

module.exports = SourceDriver;