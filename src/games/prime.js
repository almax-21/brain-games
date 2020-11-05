import launchGame from '../index.js';
import getRandomFromRange from '../utils.js';

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
  const number = getRandomFromRange(100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();

  return [rightAnswer, question];
};

export default () => launchGame(gameRule, getPrimeData);
