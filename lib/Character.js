const Potion = require("../lib/Potion");

class Character {
  constructor(name) {
    this.name = name;
    this.health = 40;
    this.agility = 1;
    this.strength = 1;
    this.attack = 2;
    this.defence = 1;
    this.stats = [
      this.name,
      this.health,
      this.agility,
      this.strength,
      this.attack,
      this.defence,
    ];

    // Character will come with 1 health and 1 random potion
    this.inventory = [new Potion("health"), new Potion()];

    Character.prototype.getStats = function () {
      return (
        `Character ${this.name} Stats are: `,
        {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          attack: this.attack,
          defence: this.defence,
          agility: this.ability,
        }
      );
    };

    Character.prototype.getInventory = function () {
      return `Character ${this.name} Inventory is: `, this.inventory;
    };

    Character.prototype.getHealth = function () {
      return `${this.name}'s health is now ${this.health}`;
    };

    Character.prototype.getFightStats = function () {
      return `${this.name}'s fight stats are Attack: ${this.attack}, Defence: ${this.defence}, Strength: ${this.strength}, Agility: ${this.agility}`;
    };

    Character.prototype.isAlive = function () {
      return this.health <= 0 ? false : true;
    };

    Character.prototype.reduceHealth = function (damage) {
      this.health -= damage;

      if (this.health < 0) {
        this.health = 0;
      }
    };
  }
}
module.exports = Character;
