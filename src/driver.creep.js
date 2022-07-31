const PathManager = require("manager.path");
const TaskManager = require("manager.task");
const CreepMissionManager = require("manager.mission.creep");
const SpawnMissionManager = require("src/manager.room.mission.spawn");
const Task = require("type.task");
const Mission = require("type.mission.creep");

class CreepDriver {

    static driveCreeps(creepsData, roomName) {//drive creep to work, or, let spawn spawnCreep
        for (const creepData of creepsData) {
            const creep = Game.creeps[creepData.name];
            if (!creep) {//if creep does not exist
                //add spawn mission
                SpawnMissionManager.addSpawnMission(creepData, roomName);
                this.releaseMission(creepData);
            } else if (!creep.spawning) {//if creep exists and is not being spawned.
                this.driveCreep(creepsData, roomName);
            }
        }
    }

    static driveCreep(creepData, roomName) {
        const creep = Game.creeps[creepData.name];
        if (TaskManager.tasksIsEmpty(creepData)) {//if there is no tasks
            TaskManager.updateTasks(creepData, roomName);//generate tasks in this room by mission list
        }

        const tasks = Memory.creeps[creep.name].tasks;

        if (tasks.length === 0) {
            this.updateTasks(creep, roomName);
        }

        if (tasks.length !== 0) {
            const task = tasks[0];
            if (this.runTask(creep, task, roomName)) {
                tasks.shift();
                this.idle(creep, roomName);//if task was finished, idle, and this is a useful feature.
            }
        } else {
            this.idle(creep, roomName);
        }
    }

    static runTask(creepData, task, roomName) {
        const creep = Game.creeps[creepData.name];
        const target = Game.getObjectById(task.targetId);

        switch (task.action) {
            case Task.MOVE:
                if (PathManager.arrived(creep)) {//arrived, finish moving
                    return true;
                }
                if (!target.pos.isNearTo(PathManager.getDestination(creep))) {//path need to be updated
                    PathManager.setPath(creep, target);
                }
                PathManager.moveCreep(creep);//move creep by path
                break;
            case Task.HARVEST:

        }

        return false;
    }

    static updateTasks(creepData, roomName) {
        const creep = Game.creeps[creepData.name];
        for (const missionItem of creepData.missions) {
            const mission = missionItem[0];
        }
    }

    static finishedMission(creepData) {
        const creep = Game.creeps[creepData.name];
        if (!Memory.creeps[creepData.name].currentMission) {
            Memory.creeps[creepData.name].currentMission = 0;
        }

        const mission = creepData.missions[creep.memory.currentMission][0];
        let finished = false;
        switch (mission) {
            case Mission.MINING:
                if (creep.store.getFreeCapacity() === 0 && creep.store.getCapacity() !== 0) {
                    finished = true;
                }
                break;
            case Mission:
                if (creep.store.getUsedCapacity() === 0) {
                    finished = true;
                }
                break;
            case Mission.BUILD:
                break;
            case Mission.REPAIR:
                break;
            case Mission.UPGRADE_CONTROLLER:
                break;
        }
        return finished;
    }


    static releaseMission(creepData) {
        //TODO
    }

    static idle(creepData, roomName) {
        //TODO
    }
}

module.exports = CreepDriver;
