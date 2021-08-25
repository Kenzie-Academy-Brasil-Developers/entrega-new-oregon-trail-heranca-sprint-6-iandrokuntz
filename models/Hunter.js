const { cacador, viajante } = require("../app");
const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name, health = true, food = 2 ){
        super(name, health, food);
    }

    hunt(){
        this.food += 5;
    }

    eat(){
        if (this.food <= 0) {
            this.isHealthy = false;
        }
        if (this.food === 1) {
            this.food -= 1;
            this.isHealthy = false;
        }
        else {
            this.food -= 2;
        }
    }

    giveFood(viajante, numOfFoodUnits) {
        if(numOfFoodUnits <= this.food) {
            this.food -= numOfFoodUnits;
            viajante.food += numOfFoodUnits;
        }
    }
}

module.exports = Hunter;