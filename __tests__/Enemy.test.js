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
test("gets a description of the enemy", () => {
  const enemy = new Enemy("Tetraites", "sword");

  expect(enemy.getDescription()).toEqual(expect.stringContaining("Tetraites"));
  expect(enemy.getDescription()).toEqual(expect.stringContaining("sword"));
});

test("gets an Enemy's health value", () => {
  const enemy = new Enemy("Tetraites", "sword");

  expect(enemy.getHealth()).toEqual(
    expect.stringContaining(enemy.health.toString())
  );
});

test("checks if enemy is alive or not", () => {
  const enemy = new Enemy("Tetraites", "sword");

  expect(enemy.isAlive()).toBeTruthy();
  enemy.health = 0;
  expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy health", () => {
  const enemy = new Enemy("Tetraites", "sword");

  const oldHealth = enemy.health;

  enemy.reduceHealth(5);
  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(999);
  expect(enemy.health).toBe(0);
});

test("enemy attack is calculated", () => {
  const enemy = new Enemy("Tetraites", "sword");

  const minDamage = enemy.attack + enemy.strength;

  expect(enemy.getDamage()).toBeGreaterThan(minDamage);
});

test("enemy defence is calculated", () => {
  const enemy = new Enemy("Tetraites", "sword");

  const minDefence = enemy.defence + enemy.strength;
  expect(enemy.getDefence()).toBeGreaterThan(minDefence);
});
