const upper = new Map([
    [STRUCTURE_WALL, 0.001],
    [STRUCTURE_ROAD, 0.99],
    [STRUCTURE_RAMPART, 0.3]
]);
const lower = new Map([
    [STRUCTURE_WALL, 0.0005],
    [STRUCTURE_ROAD, 0.2],
    [STRUCTURE_RAMPART, 0.1]
]);

var roleRepairer = {
    run: function(creep) {
        if(creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.repairing = false;
	    }
	    if(!creep.memory.repairing && creep.store[RESOURCE_ENERGY] != 0) {
	        creep.memory.repairing = true;
	    }

	    if(creep.memory.repairing) {
            var target = Game.getObjectById(creep.memory.repairId);
            if(!target || (upper.has(target.structureType) && target.hits > target.hitsMax * upper.get(target.structureType))) {
                var targets = creep.roomName.find(FIND_STRUCTURES, {
                    filter: function(object) {
                        return upper.has(object.structureType) && object.hits < object.hitsMax * lower.get(object.structureType);
                }});
                target = targets[Math.floor(Math.random() * targets.length)];
            }
            if(target) {//build
                creep.memory.repairId = target.id;
                creep.REPAIR(target);
                if(!isAdj(creep.pos, target.pos)) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                }
                return true;
            }
        }
        return false;
    }
};

function isAdj(pos1, pos2) {
    return Math.max(Math.abs(pos1.x-pos2.x), Math.abs(pos1.y-pos2.y)) == 1;
}

module.exports = roleRepairer;