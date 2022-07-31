class SpawnMission {

    constructor(creepName, creepBody) {
        this.creepName = creepName;
        this.creepBody = creepBody;
    }

    toObject() {
        return {
            creepName: this.creepName,
            creepBody: this.creepBody
        };
    }

    static fromObject(obj) {
        return new SpawnMission(obj.creepName, obj.creepBody);
    }

}

module.exports = SpawnMission;
