const Potion = require("./Potion");

class Enemy {
  constructor(name, weapon) {
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

    Enemy.prototype.getStats = function () {
      return (
        `Enemy ${this.name} Stats are: `,
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

    Enemy.prototype.getInventory = function () {
      return `Enemy ${this.name} Inventory is: `, this.inventory;
    };

    Enemy.prototype.getHealth = function () {
      return `${this.name}'s health is now ${this.health}`;
    };

    Enemy.prototype.getFightStats = function () {
      return `${this.name}'s fight stats are Attack: ${this.attack}, Defence: ${this.defence}, Strength: ${this.strength}, Agility: ${this.agility}`;
    };

    Enemy.prototype.isAlive = function () {
      return this.health <= 0 ? false : true;
    };

    Enemy.prototype.reduceHealth = function (damage) {
      this.health -= damage;

      if (this.health < 0) {
        this.health = 0;
      }
    };
    Enemy.prototype.getDamage = function () {
      return Math.ceil(
        this.attack +
          this.strength +
          Math.random() * (4 * this.attack + 8 * this.strength)
      );
    };
    Enemy.prototype.getDefence = function () {
      return Math.ceil(
        this.defence +
          this.strength +
          Math.random() * (2 * this.defence + 5 * this.strength)
      );
    };

    Enemy.prototype.addPotion = function (potion) {
      this.inventory.push(potion);
    };

    Enemy.prototype.usePotion = function (index) {
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

    Enemy.prototype.getDescription = function () {
      return `${this.name} holding a ${this.weapon} has appeared!`;
    };
  }
}

module.exports = Enemy;
