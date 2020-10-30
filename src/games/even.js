import { launchGame } from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  const number = getRandomInt(100);
  const result = isEven(number) ? 'yes' : 'no';

  return [result, number];
};

export default () => launchGame(rule, startEvenGame);
