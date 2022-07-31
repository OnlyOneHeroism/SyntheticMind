var sources = [];

var roleHarvester = {
    run: function(creep) {
        if(creep.memory.harvesting && creep.store.getFreeCapacity() == 0) {
            creep.memory.harvesting = false;

            var targets = creep.roomName.find(FIND_SOURCES_ACTIVE);
            target = targets[Math.floor(Math.random() * targets.length)];
            creep.memory.sourceId = target.id;
	    }
	    if(!creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) {
	        creep.memory.harvesting = true;
	    }
	    if(creep.memory.harvesting) {
	        var target = Game.getObjectById(creep.memory.sourceId);
	        if(!target || target.energy == 0) {
	            var targets = creep.roomName.find(FIND_SOURCES_ACTIVE);
	            target = targets[Math.floor(Math.random() * targets.length)];
	        }
	        
	        if(target) {
	            creep.memory.sourceId = target.id;
	            if(creep.HARVEST(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
                }
                return true;
            }
	    }
	    return false;
    }
};

module.exports = roleHarvester;