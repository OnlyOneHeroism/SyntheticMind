class TowerDriver {
    static driveTowers(towers, roomName) {
        if (towers.length > 1) {
            if (!this.attack(towers, roomName)) {//didn't shoot
                //TODO: do what?
            }
        }
    }

    static attack(towers, roomName) {
        const hostileCreeps = roomName.find(FIND_HOSTILE_CREEPS);
        const hostilePowerCreeps = roomName.find(FIND_HOSTILE_POWER_CREEPS);

        let maxDamage = 0;
        let target;
        for (const creep of hostileCreeps) {//deal max damage
            const damage = this.calculateDamage(creep, towers);
            if (maxDamage < damage) {
                maxDamage = damage;
                target = creep;
            }
        }
        for (const powerCreep of hostilePowerCreeps) {//deal max damage
            const damage = this.calculateDamage(powerCreep, towers);
            if (maxDamage < damage) {
                maxDamage = damage;
                target = powerCreep;
            }
        }

        if (target) {//shoot
            for (const tower of towers) {
                tower.attack(target);
            }
            return true;
        }
        return false;
    }

    static calculateDamage(target, towers) {
        let damage = 0;
        let range;
        for (const tower of towers) {
            range = target.pos.getRangeTo(tower);
            if (range <= 5) {
                damage += 600;
            } else if (range >= 20) {
                damage += 150;
            } else {
                damage += 750 - 30 * range;
            }
        }
        return damage;
    }

}

module.exports = TowerDriver;