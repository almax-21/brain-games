import { check, getRandomInt, launchGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  const number = getRandomInt();
  const result = check(isEven, number);

  return [result, number];
};

export default () => launchGame(rule, startEvenGame);
