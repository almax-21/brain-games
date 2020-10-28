import { check, getRandomInt } from '../index.js';

const isEven = (num) => num % 2 === 0;

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const startEvenGame = () => {
  const number = getRandomInt();
  const result = check(isEven, number);

  return [result, number];
};
