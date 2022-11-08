class Potion {
  constructor(name) {
    this.types = [
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
    this.name =
      name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === "health") {
      this.value = Math.floor(Math.random() * 50 + 30);
      console.log("type is", typeof this.value);
    } else {
      this.value = Math.floor(Math.random() * 5 + 12);
    }
  }
}

module.exports = Potion;
