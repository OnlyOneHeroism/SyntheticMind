class PathManager {

    static getDestination(creep) {//get current destination
        if (!creep.memory.path) {
            creep.path = [];
            return undefined;
        } else {
            const path = Memory.creeps[unitData.name].path;
            return creep.room.getPositionAt(path.x, path.y);
        }
    }

    static setPath(creep, target) {//update path
        const rawPath = creep.pos.findPathTo(target.pos, {
            ignoreCreeps: true,
            range: 1
        });

        creep.memory.path = {};
        const path = creep.memory.path;

        path.x = rawPath[rawPath.length - 1].x;
        path.y = rawPath[rawPath.length - 1].y;

        path.directions = [];

        for (const pathStep of rawPath) {
            path.directions.push(pathStep.direction);
        }
    }

    static arrived(creep) {//arrived destination?
        return creep.pos.isEqualTo(this.getDestination(creep));
    }

    static moveCreep(creep) {//move creep by path
        let dx, dy;
        switch (creep.memory.path) {

        }
        creep.move(creep.memory.path.directions.shift());
        creep.memory.moving = true;

    }
}

module.exports = PathManager;