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

    this.getStats = function () {
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

    this.getInventory = function () {
      return `Character ${this.name} Inventory is: `, this.inventory;
    };
  }
}
module.exports = Character;
