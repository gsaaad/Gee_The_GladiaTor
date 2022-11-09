const Character = require("../lib/Character");

test("Creates a Character", () => {
  const character = new Character("GeeTheGladiator");
  console.log("Character Name", character.name.length);
  expect(character.name).toEqual(expect.any(String));
  expect(character.name.length).toBeGreaterThan(5);
});
test("Character abilities are default, h:40, aglt:1, s:1, a:2", () => {
  const character = new Character("GeeTheGladiator");

  expect(character.agility).toEqual(1);
  expect(character.strength).toEqual(1);
  expect(character.health).toEqual(40);
  expect(character.attack).toEqual(2);
});
