import launchGame from '../index.js';
import getRandomFromRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenData = () => {
  const number = getRandomFromRange(100);
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();

  return [rightAnswer, question];
};

export default () => launchGame(gameRule, getEvenData);
