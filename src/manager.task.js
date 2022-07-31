const CreepMission = require("type.mission.creep");
const Task = require("type.task");
const CreepMissionManager = require("manager.mission.creep");
const SpawnMissionManager = require("src/manager.room.mission.spawn");
const HarvestMissionManager = require("manager.mission.harvest");

class TaskManager {
    static tasksIsEmpty(creepData) {
        const creep = Game.creeps[creepData.name];
        if (!creep.memory.tasks) {
            creep.memory.tasks = [];
            return true;
        } else {
            return creep.memory.tasks.length === 0;
        }
    }

    static updateTasks(creepData, roomName) {
        const creep = Game.creeps[creepData.name];
        for (const missionItem of creepData.missions) {
            const mission = missionItem[0];
            if (!this.readyForMission(creepData, mission)) {//cannot do this mission now
                continue;//go next mission
            }
            switch (mission) {
                case CreepMission.MINING:
                    if (missionItem[1]) {//have a special target
                        this.generateTask(creepData, Task.MOVE, missionItem[1]);
                        this.generateTask(creepData, Task.HARVEST, missionItem[1]);
                    } else {
                        const mission = HarvestMissionManager.getHarvestMission(roomName);

                    }
            }
        }
    }

    static generateTask(creepData, taskType, targetId) {
        switch (taskType) {

        }
    }

    static readyForMission(creepData, missionType, roomName) {
        const creep = Game.creeps[creepData.name];
        switch (missionType) {
            case CreepMission.MINING:
            case CreepMission.TRANSFERENCE:
                return creep.store.getFreeCapacity() !== 0;//if has free capacity, ok for mining
            case CreepMission.REPAIRMENT:
            case CreepMission.UPGRADE_CONTROLLER:
            case CreepMission.BUILDING:
                return creep.store.getUsedCapacity(RESOURCE_ENERGY) !== 0;//if has energy, ok for upgrading
        }
    }

}

module.exports = TaskManager;