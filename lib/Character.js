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
    this.inventory = [new Potion(), new Potion()];

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
    Character.prototype.getDamage = function () {
      return Math.ceil(
        this.attack +
          this.strength +
          Math.random() * (4 * this.attack + 8 * this.strength)
      );
    };
    Character.prototype.getDefence = function () {
      return Math.ceil(
        this.defence +
          this.strength +
          Math.random() * (2 * this.defence + 5 * this.strength)
      );
    };

    Character.prototype.addPotion = function (potion) {
      this.inventory.push(potion);
    };

    Character.prototype.usePotion = function (index) {
      const potion = this.getInventory().splice(index, 1)[0];

      const potionName = potion.name;
      const potionTypes = [
        "strength",
        "agility",
        "health",
        "mana",
        "energy",
        "accuracy",
        "poison",
        "fire",
        "golem",
        "Jrikow",
        "raven",
      ];
      potionTypes.includes(potionName)
        ? (this.potionName += potion.value)
        : console.log("not a real potion");
    };
  }
}
module.exports = Character;
