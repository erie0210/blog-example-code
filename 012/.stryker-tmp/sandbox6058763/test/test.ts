// @ts-nocheck

import { addFunc } from "../src/simpleTest";

test('adds 1 + 2 to equal 3', () => {
  expect(addFunc(1, 2)).toBe(3);
});