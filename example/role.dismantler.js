var roleDismantler = {
    
    run: function(creep) {
        var target = Game.getObjectById("5d1d4fe91a226737253b5610");
        if(target) {
            if(creep.dismantle(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
            }
            return true;
        }
        return false;
    }

};

module.exports = roleDismantler;