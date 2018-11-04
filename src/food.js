import random from 'lodash/random';

const FRUITS = ['🍏', '🍉', '🍇'];

const FAST_FOODS = ['🍔', '🍟', '🍕'];

const randomFruit = () =>
  FRUITS[random(0, FRUITS.length - 1)];

const randomFastFood = () =>
  FAST_FOODS[random(0, FRUITS.length - 1)];

export {
  FRUITS,
  FAST_FOODS,
  randomFruit,
  randomFastFood
};
