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
    console.log(this.name);
    console.log("random number", Math.floor(Math.random() * this.types.length));

    this.name === "health"
      ? (this.value = Math.floor(Math.random() * 50 + 30))
      : (this.value = Math.floor(Math.random() * 5 + 12));
    console.log(this);
  }
}

export default Potion;
