import runEngine from '../index.js';
import getRandomFromRange from '../utils.js';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calcGcd(num2, num1 % num2);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcdData = () => {
  const number1 = getRandomFromRange(100);
  const number2 = getRandomFromRange(100);
  const rightAnswer = calcGcd(number1, number2).toString();
  const question = `${number1} ${number2}`;

  return [rightAnswer, question];
};

export default () => runEngine(gameRule, getGcdData);
