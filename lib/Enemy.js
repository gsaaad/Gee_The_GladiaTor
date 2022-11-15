const Potion = require("./Potion");

function Enemy(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.potion = new Potion();
  this.health = 30;
  this.strength = 1;
  this.attack = 1;
  this.agility = 1;
  this.defence = 1;
  this.stats = [
    this.name,
    this.health,
    this.agility,
    this.strength,
    this.attack,
    this.defence,
  ];
  this.inventory = [new Potion(), new Potion()];
}

module.exports = Enemy;
