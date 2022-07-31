module.exports = function(grunt) {
    let configs = require("./screeps.json");//load config as json
    let target = grunt.option("target");//get parameter called "target" in scripts in package.json

    grunt.loadNpmTasks("grunt-screeps");

    if (grunt.option("ptr")) {
        configs[target]["token"] = configs.ptr_token;
        configs[target]["ptr"] = true;
    }

    grunt.initConfig({//core
        screeps: {
            options: configs[target],
            dist: {
                src: ["src/*.js"]
            }
        }
    });
}