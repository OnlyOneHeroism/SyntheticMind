const Mission = require("type.mission.creep");

const sources = [
    {
        id: "5bbcaf7b9099fc012e63aa6c",
        reservablePosition: 3,
        pos: {//this key is useless
            x: 10,
            y: 6
        },
    },
    {
        id: "5bbcaf7b9099fc012e63aa6e",
        reservablePosition: 4,
        pos: {
            x: 46,
            y: 34
        },
    }];

const e42s45 = {
    roomName: "E42S45",
    sources: sources,
    spawnNames: ["E42S45_Spawn1", "Spawn1"],
    creeps: [
        {
            name: "E42S45_harvester1",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.MINING, sources[0].id]
            ]
        },
        {
            name: "E42S45_harvester2",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.MINING, sources[1].id]
            ]
        },
        {
            name: "E42S45_worker",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.BUILDING],
                [Mission.REPAIRMENT],
                [Mission.UPGRADE_CONTROLLER],
            ]
        },
        {
            name: "E42S45_transporter",
            body: [CARRY, MOVE],
            missions: [
                [Mission.WITHDRAWAL],
                [Mission.TRANSFERENCE]
            ]
        },
        {
            name: "E42S45_upgrader1",
            body: [WORK, CARRY, MOVE],
            missions: [
                [Mission.UPGRADE_CONTROLLER]
            ]
        },
    ]
};

module.exports = e42s45;