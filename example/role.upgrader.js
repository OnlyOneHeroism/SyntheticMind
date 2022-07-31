var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.upgrading && creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.upgrading = false;
	    }
	    if(!creep.memory.upgrading && creep.store[RESOURCE_ENERGY] !== 0) {
	        creep.memory.upgrading = true;
	    }

	    if(creep.memory.upgrading) {
	        creep.upgradeController(creep.room.controller);
	       // creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
	        creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            // if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            // }
            return true;
        } else {//lack of energy
            return false;
        }
	}
};

module.exports = roleUpgrader;
