import launchGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const createProgression = () => {
  const initValue = getRandomInt(100);
  const step = getRandomInt(10);
  const coll = [initValue];

  for (let i = 1; i <= 9; i += 1) {
    const prevValue = coll[i - 1];
    coll[i] = prevValue + step;
  }

  return coll;
};

const gameRule = 'What number is missing in the progression?';

const getProgressionData = () => {
  const progression = createProgression();
  const randomIndex = getRandomInt(progression.length);
  const operationResult = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  return [operationResult, ...progression];
};

export default () => launchGame(gameRule, getProgressionData);
