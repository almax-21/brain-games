import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenData = () => {
  const number = getRandomInt(100);
  const operationResult = isEven(number) ? 'yes' : 'no';

  return [operationResult, number];
};

export default () => launchGame(gameRule, getEvenData);
