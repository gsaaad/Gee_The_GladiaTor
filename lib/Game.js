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
          this.player = new Player(name);

          // test the object creation
          console.log(this.currentEnemy, this.player);
        });
    };
  }
}

export default Game;
