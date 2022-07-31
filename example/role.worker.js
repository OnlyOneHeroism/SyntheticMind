var roleUpgrader = require("example/role.upgrader");
var roleBuilder = require("example/role.builder");
var roleHarvester = require("example/role.harvester");
var roleRepairer = require("example/role.repairer");
var roleTransporter = require("example/role.transporter");
var roleDismantler = require("example/role.dismantler");
var roleLooter = require("example/role.looter");

var roleWorker = {

    run: function(creep) {
        
        if(roleDismantler.run(creep)) {
            return true;
        }
        if(roleLooter.run(creep)) {
            console.log(creep.name + ":" + "loot");
            return true;
        }
        if(roleHarvester.run(creep)) {
            console.log(creep.name + ":" + "harv");
            return true;
        }
        if(roleTransporter.run(creep)) {
            console.log(creep.name + ":" + "trans");
            return true;
        }
        if(roleBuilder.run(creep)) {
            console.log(creep.name + ":" + "build");
            return true;
        }
        if(roleRepairer.run(creep)) {
            console.log(creep.name + ":" + "rep");
            return true;
        }
        if(roleUpgrader.run(creep)) {
            console.log(creep.name + ":" + "upgrade");
            return true;
        }
        
        return false;
	}
};

module.exports = roleWorker;