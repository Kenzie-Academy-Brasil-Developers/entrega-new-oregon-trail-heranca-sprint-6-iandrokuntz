const Traveler = require("./Traveler");

class Doctor extends Traveler{
    constructor(name, health = true, food = 1){
        super(name, health, food);
    }

    heal(traveler){
        traveler.isHealthy = true;
    }
}

module.exports = Doctor;