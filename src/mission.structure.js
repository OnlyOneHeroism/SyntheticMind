class MissionStructure {
    constructor(missionType, structureType, structureId) {
        this.missionType = missionType;
        this.structureType = structureType;
        this.structureId = structureId;
    }

    setResourceType(resourceType) {
        this.resourceType = resourceType;
        return this;
    }

    setResourceAmount(amount) {
        this.resourceAmount = amount;
        return this;
    }

    setResourceReserved(amount) {
        this.resourceReserved = amount;
        return this;
    }

    toRoomMissionQueueElement() {
        switch (this.missionType) {
            case MissionStructure.MissionType.TRANSPORT_MISSION:
                return {
                    structureType: this.structureType,
                    structureId: this.structureId,
                };
            case MissionStructure.MissionType.REPAIR_MISSION:
                return {
                    structureType: this.structureType,
                    structureId: this.structureId,
                }
            default:
                return null;
        }
    }

    toStructureMissionQueueElement() {
        switch (this.missionType) {
            case MissionStructure.MissionType.TRANSPORT_MISSION:
                return {
                    resourceAmount: this.resourceAmount,
                    resourceReserved: this.resourceReserved,
                };
            default:
                return null;
        }
    }

}

MissionStructure.MissionType = {
    TRANSPORT_MISSION: 0,
    REPAIR_MISSION: 1,
};
module.exports = MissionStructure;
