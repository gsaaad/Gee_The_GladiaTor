const Potion = require("../lib/Potion");

class Character {
  constructor(name) {
    this.name = name;
    this.health = 40;
    this.agility = 1;
    this.strength = 1;
    this.attack = 2;
    // Character will come with 1 health and 1 random potion
    this.inventory = [new Potion("health"), new Potion()];
  }
}
module.exports = Character;
