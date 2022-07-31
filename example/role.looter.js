var roleLooter = {
    run: function(creep) {
        if(creep.store.getUsedCapacity(RESOURCE_ENERGY) != 0) {
            return false;
        }
        
        target = Game.getObjectById(creep.memory.lootId);
        if(!target) {
            target = creep.pos.findClosestByPath(FIND_TOMBSTONES, {
                filter: function(tombstone) {
                    return tombstone.store.getUsedCapacity(RESOURCE_ENERGY) != 0;
                }
            })
        }
        if(!target) {
            target = creep.pos.findClosestByPath(FIND_RUINS, {
                filter: function(ruin) {
                    return ruin.store.getUsedCapacity(RESOURCE_ENERGY) != 0;
                }
            })
        }
        if(target && target.store.getUsedCapacity(RESOURCE_ENERGY) != 0) {
            creep.moveTo(target);
            creep.withdraw(target, RESOURCE_ENERGY);
            creep.memory.lootId = target.id;
        } else {
            return false;
        }
    }
};

module.exports = roleLooter;