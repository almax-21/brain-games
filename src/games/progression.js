import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const createProgression = (firstItem, diff, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result[i] = firstItem + diff * i;
  }

  return result;
};

const gameRule = 'What number is missing in the progression?';

const getProgressionData = () => {
  const firstElement = getRandomInt(100);
  const difference = getRandomInt(10);
  const lengthOfProgression = 10;
  const randomIndex = getRandomInt(lengthOfProgression);

  const progression = createProgression(firstElement, difference, lengthOfProgression);
  const operationResult = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  return [operationResult, ...progression];
};

export default () => launchGame(gameRule, getProgressionData);
