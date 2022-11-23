import Enemy from "./Enemy.js";
import Character from "./Character.js";
import inquirer from "inquirer";

class Game {
  constructor() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
  }

  initializeGame = function () {
    // todo when we start the game, we want to have 10 enemies, with swords [randomly selected], and shields [randomly selected] + rarity
    this.enemies.push(new Enemy("goblin", "sword"));
    this.enemies.push(new Enemy("orc", "baseball bat"));
    this.enemies.push(new Enemy("skeleton", "axe"));

    this.currentEnemy = this.enemies[0];

    // inquirer ask user/begin game

    inquirer
      .prompt({
        type: "text",
        name: "name",
        message: "What is your Gladiator's name?",
      })
      // destructure name from the prompt object
      .then(({ name }) => {
        this.player = new Character(name);

        // test the object creation
        console.log(this.currentEnemy, this.player);
        this.startNewBattle();
      });
  };

  startNewBattle = function () {
    if (this.player.agility >= this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }
    console.log("Player stats: ", this.player.getFightStats());

    this.battle();
  };
  battle = function () {
    if (this.isPlayerTurn) {
      inquirer
        .prompt({
          type: "list",
          message: "what would you like to do?",
          name: "action",
          choices: ["Attack", "Use Potion"],
        })
        .then(({ action }) => {
          if (action === "Use Potion") {
            if (!this.player.getInventory()) {
              console.log("You don't have any potions");
              return this.checkEndOfBattle();
            }
            console.log("finding potions..");

            inquirer
              .prompt({
                type: "list",
                message: "Which potion would you like to use?",
                name: "action",
                choices: this.player
                  .getInventory()
                  .map((item, index) => `${index + 1}: ${item.name}`),
              })
              .then(({ action }) => {
                const potionDetails = action.split(": ");

                this.player.usePotion(potionDetails[0] - 1);
                console.log(`You used a ${potionDetails[1]} potion`);
                this.checkEndOfBattle();
              });
          } else {
            console.log("attacking!");
            const damage = this.player.getDamage();
            this.currentEnemy.reduceHealth(damage);

            console.log(`You attacked the ${this.currentEnemy.name}`);
            console.log(this.currentEnemy.getHealth());

            this.checkEndOfBattle();
          }
        });
    } else {
      const damage = this.currentEnemy.getDamage();
      this.player.reduceHealth(damage);

      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log(this.player.getHealth());

      this.checkEndOfBattle();
    }
  };

  checkEndOfBattle = function () {
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
      this.isPlayerTurn = !this.isPlayerTurn;
      this.battle();
    } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
      console.log(`you've defeated the ${this.currentEnemy.name}`);

      this.player.addPotion(this.currentEnemy.potion);
      console.log(
        `${this.player.name} found a ${this.currentEnemy.potion.name} potion`
      );

      this.roundNumber++;

      if (this.roundNumber < this.enemies.length) {
        this.currentEnemy = this.enemies[this.roundNumber];
        this.startNewBattle();
      } else {
        console.log("You Win!");
      }
    } else {
      console.log("You've been defeated!");
    }
  };
}

export default Game;
