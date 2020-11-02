import runEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calcGcd(num2, num1 % num2);
};

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcdData = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const operationResult = calcGcd(number1, number2).toString();
  const questionValue = `${number1} ${number2}`;

  return [operationResult, questionValue];
};

export default () => runEngine(gameRule, getGcdData);
