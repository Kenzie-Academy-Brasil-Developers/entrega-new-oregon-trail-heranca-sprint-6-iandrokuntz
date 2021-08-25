 
const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador, viajante } = require("../../app");
const Traveler = require("../../models/Traveler");


    Given('um Hunter de nome {string}', function (string) {
        cacador.name = string

    });

    When('o Hunter comer {int} vezes', function (int) {
        for (let i = 0; i < int; i++) {
            cacador.eat();
        }

    });

    When('o Hunter sair para caçar {int} vezes', function (int) {
        for (let i = 0; i < int; i++) {
        cacador.hunt();
    }
    });

    When('o Hunter doa {int} comida para um viajante.', function (int) {
        cacador.giveFood(viajante, int);
        
    });


    Then('a quantidade de refeiçôes deve ser igual a {int}', function (int) {
        cacador.food = 0

    });

    Then('o Hunter não ficará doente', function () {
        cacador.isHealthy = true
        
    });

      Then('o Hunter ficará doente', function () {
        cacador.isHealthy = false

    });

    Then('a quantidade de comida do Hunter deve ser igual a {int}.', function (int) {
        cacador.food = 1
    });

    Then('o Traveler ficará com {int} refeições.', function (int) {
        Traveler.food = 2
    });