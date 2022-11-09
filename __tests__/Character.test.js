const Character = require("../lib/Character");
// const Potion = require("../lib/__mocks__/Potion");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion.js");

console.log(new Potion());

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

test("Character inventory", () => {
  const character = new Character("GeeTheGladiator");

  expect(character.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
