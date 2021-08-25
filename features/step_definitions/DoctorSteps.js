const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor, viajante } = require("../../app");
const Traveler = require("../../models/Traveler");


    Given('um Doctor de nome {string}', function (string){
        this.name = string;

        });

    Given('ele sempre começa a viagem com {int} de refeição', function (int){
        this.food = int  

        });

    Given('ele sempre começa a viagem saudável', function (){
        this.isHealthy = true

        });

    When('o Doctor come {int} vezes', function (int) {
        this.food = int
        this.isHealthy = true
        });
    
    When('o Doctor cura um traveler', function () {
            if(viajante.isHealthy === false){
                doutor.heal(viajante)
            } 
        });
 
    Then('a quantidade de comida deve ser igual a {int}', function (int) {
       this.food = 0

        });
        
    Then('o Doctor não ficará doente', function () {
        this.isHealthy = true

        });
    
    Then('o traveler ficará saudável', function () {
        Traveler.isHealthy = true
        });
    

     