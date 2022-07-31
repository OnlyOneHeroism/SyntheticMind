var roleTransporter = require("example/role.transporter");

var roleSelfdestructer = {

    run: function(creep) {
        if(creep.ticksToLive < 100) {
            if(!roleTransporter.run(creep)) {
                var spawn = creep.pos.findClosestByPath(STRUCTURE_SPAWN);
                if(spawn && spawn.recycleCreep(creep) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(spawn);
                }
            }
            return true;
        }
        return false;
    }
    
}

module.exports = roleSelfdestructer;
