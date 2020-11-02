import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeData = () => {
  const number = getRandomInt(100);
  const operationResult = isPrime(number) ? 'yes' : 'no';
  const questionValue = number.toString();

  return [operationResult, questionValue];
};

export default () => launchGame(gameRule, getPrimeData);
