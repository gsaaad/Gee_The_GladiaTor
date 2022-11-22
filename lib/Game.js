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

    Game.prototype.battle = function () {
      if (this.isPlayerTurn) {
        inquirer
          .prompt({
            type: "list",
            message: "what would you like to do?",
            name: "action",
            choices: ["Attack", "Use Potion"],
          })
          .then(({ action }) =>
            action === "Use Potion"
              ? console.log("use potion")
              : this.currentEnemy.reduceHealth(damage)
          );
        console.log(`You attacked ${this.currentEnemy.name}`);
        console.log(this.currentEnemy.getHealth());
      } else {
        const damage = this.currentEnemy.getAttackValue();
        this.player.reduceHealth(damage);
      }
      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log("this.player.getHealth()");
    };

    Game.prototype.startNewBattle = function () {
      if (this.player.agility > this.currentEnemy.agility) {
        this.isPlayerTurn = true;
      } else {
        this.isPlayerTurn = false;
      }
      console.log("Player stats: ", this.player.getFightStats());

      this.battle();
    };

    Game.prototype.initializeGame = function () {
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
          message: "What is your name?",
        })
        // destructure name from the prompt object
        .then(({ name }) => {
          this.player = new Character(name);

          // test the object creation
          console.log(this.currentEnemy, this.player);
          this.startNewBattle();
        });
    };
  }
}

export default Game;
