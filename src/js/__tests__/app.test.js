import { getRandomPosition, moveGnome } from "../app";

test("getRandomPosition test", () => {
  const randomPosition = getRandomPosition();
  expect(randomPosition).toBeInstanceOf(Object);
});
