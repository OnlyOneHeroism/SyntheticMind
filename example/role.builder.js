var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
	    }
	    if(!creep.memory.building && creep.store[RESOURCE_ENERGY] != 0) {
	        creep.memory.building = true;
	    }

	    if(creep.memory.building) {
	        var target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if(target != null) {//build
                // if(creep.build(target) == ERR_NOT_IN_RANGE) {
                    // creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                // }
                creep.build(target);
                if(!isAdj(creep.pos, target.pos)) {
                    creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                }
                // creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
                return true;
            }
        }
        return false;
	}
};

function isAdj(pos1, pos2) {
    return Math.max(Math.abs(pos1.x-pos2.x), Math.abs(pos1.y-pos2.y)) == 1;
}

module.exports = roleBuilder;
