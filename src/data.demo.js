const Mission = require("type.mission.creep");

const demo = {
    roomName: "",
    creepsData: [
        {
            name: "SIM_harvester1",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.MINING, "id1"]
            ]
        },
        {
            name: "SIM_harvester2",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.MINING, "id2"]
            ]
        },
        {
            name: "SIM_worker",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.BUILDING],
                [Mission.REPAIRMENT],
                [Mission.UPGRADE_CONTROLLER],
            ]
        },
        {
            name: "SIM_transporter",
            body: [CARRY, MOVE],
            missions: [
                [Mission.WITHDRAWAL],
                [Mission.TRANSFERENCE]
            ]
        },
        {
            name: "SIM_upgrader1",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.UPGRADE_CONTROLLER]
            ]
        },
    ]
};

module.exports = demo;