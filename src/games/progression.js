import launchGame from '../index.js';
import getRandomFromRange from '../utils.js';

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
  const firstElement = getRandomFromRange(100);
  const difference = getRandomFromRange(10);
  const randomIndex = getRandomFromRange(lengthOfProgression);

  const progression = createProgression(firstElement, difference, lengthOfProgression);
  const rightAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [rightAnswer, question];
};

export default () => launchGame(gameRule, getProgressionData);
