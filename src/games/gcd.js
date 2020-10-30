import { getRandomInt, launchGame } from '../index.js';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calcGcd(num2, num1 % num2);
};

const rule = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => {
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const result = calcGcd(number1, number2);

  return [result, number1, number2];
};

export default () => launchGame(rule, startGcdGame);
