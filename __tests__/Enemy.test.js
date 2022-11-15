const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion.js");

test("creates an Enemy Object", () => {
  const enemy = new Enemy("Tetraites", "sword");

  expect(enemy.name).toBe("Tetraites");
  expect(enemy.weapon).toBe("sword");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.attack).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.inventory).toEqual(expect.any(Array));
  expect(enemy.potion).toEqual(expect.any(Object));
});
