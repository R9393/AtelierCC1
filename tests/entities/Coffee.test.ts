import { Espresso } from '../../src/entities/Coffee';

test('Espresso should have correct price', () => {
  const espresso = new Espresso(1);
  expect(espresso.getPrice()).toBe(2.5);
});