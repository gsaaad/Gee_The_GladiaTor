const Potion = require("../lib/Potion");

test("Creates a Health potion", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});

test("Creates an ability Potion", () => {
  const potion = new Potion("ability");

  expect(potion.name).toBe("ability");
  expect(potion.value).toEqual(expect.any(Number));
});

test("Creates a random potion object", () => {
  const potion = new Potion();
  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThanOrEqual(4);
  expect(potion.value).toEqual(expect.any(Number));
});
