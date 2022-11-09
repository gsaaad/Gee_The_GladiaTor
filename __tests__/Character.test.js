const Character = require("../lib/Character");
// const Potion = require("../lib/__mocks__/Potion");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion.js");

// console.log(new Potion());

test("Creates a Character", () => {
  const character = new Character("GeeTheGladiator");
  //   console.log("Character Name", character.name.length);
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

test("Character has inventory", () => {
  const character = new Character("GeeTheGladiator");

  expect(character.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("Character has potions in inventory, inventory is 2", () => {
  const character = new Character("GeeTheGladiator");

  const characterInventory = character.inventory;
  const healthPotion = characterInventory[0];
  const randomPotion = characterInventory[1];
  //   console.log("Health Potion", healthPotion);
  //   console.log("Total inventory: ", characterInventory);

  expect(healthPotion.name).toBe("health");
  expect(randomPotion.name).toEqual(expect.any(String));
  expect(characterInventory.length).toBe(2);
});

test("Character has stats as an object", () => {
  const character = new Character("GeeTheGladiator");

  expect(character.getStats()).toHaveProperty("potions");
  expect(character.getStats()).toHaveProperty("health");
  expect(character.getStats()).toHaveProperty("strength");
  expect(character.getStats()).toHaveProperty("agility");
  expect(character.getStats()).toHaveProperty("attack");
  expect(character.getStats()).toHaveProperty("defence");
});

test("Getting inventory from character or return false", () => {
  const character = new Character("GeeTheGladiator");

  expect(character.getInventory()).toEqual(expect.any(Array));
  console.log(character.getInventory());
  character.inventory = [];

  expect(character.getInventory()).toEqual([]);
});
