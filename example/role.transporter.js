var possibleStructure = new Set([STRUCTURE_EXTENSION, STRUCTURE_SPAWN]);
// var container = new Set([STRUCTURE_STORAGE]);

var roleTransporter = {
    run: function(creep) {
        if(creep.memory.transfering && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.transfering = false;
	    }
	    if(!creep.memory.transfering && creep.store[RESOURCE_ENERGY] != 0) {
            creep.memory.transfering = true;
	    }
        
        if(creep.memory.transfering) {
            var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return possibleStructure.has(structure.structureType) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            
            // if(!target) {
            //     target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            //     filter: (structure) => {
            //         return container.has(structure.structureType) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
            //     }
            // });
            // }
            
            if(target) {//has target, transfe
	            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                    return true;
                } else {
                    return false;   
                }
            }
        }
        return false;
    }
}

module.exports = roleTransporter;
