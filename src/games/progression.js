import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const createProgression = (firstItem, diff, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(firstItem + diff * i);
  }

  return result;
};

const gameRule = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgressionData = () => {
  const firstElement = getRandomInt(100);
  const difference = getRandomInt(10);
  const randomIndex = getRandomInt(lengthOfProgression);

  const progression = createProgression(firstElement, difference, lengthOfProgression);
  const operationResult = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const questionValue = progression.join(' ');

  return [operationResult, questionValue];
};

export default () => launchGame(gameRule, getProgressionData);
