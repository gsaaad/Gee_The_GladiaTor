// match mock file

module.exports = function () {
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
  this.name = this.types[Math.floor(Math.random() * this.types.length)];
  this.name === "health"
    ? (this.value = Math.floor(Math.random() * 50 + 30))
    : (this.value = Math.floor(Math.random() * 5 + 12));
};
