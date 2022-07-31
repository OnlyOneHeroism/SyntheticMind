//For class Nexus and All class extended Nexus
const unitData = {
    name: "test",
    body: [WORK, CARRY, MOVE],
    workQueue: [
        [Mission.withdraw, RESOURCE_ENERGY],
        [Mission.pickup],
        [Mission.HARVEST, "targetSourceId"],
        [Mission.BUILD, ""],
        [Mission.REPAIR, ""],
        [Mission.UPDATE_CONTROLLER, ""],
        [Mission.transfer, ""]
    ],
    currentWork: 0
}

const task = {
    targetId: "id",
    action: "Task."
}

const path = {
    directions: [],
    x: 1,
    y: 1
}

const spawnMission = {
    name: "name",
    body: []
}

const harvestMission = {
    targetId: "id",
    amount: "",
    reservedAmount: "",
    reservedPosition: ""
}

const transportMission = {
    targetId: "id",
    resource: "resource",
    amount: "amount",
    reservedAmount: ""
};
