import { getRandomInt, getRandomDigit, launchGame } from '../index.js';

const createProgression = () => {
  const initValue = getRandomInt();
  const step = getRandomDigit();
  const coll = [initValue];

  for (let i = 1; i <= 9; i += 1) {
    const prevValue = coll[i - 1];
    coll[i] = prevValue + step;
  }

  return coll;
};

const rule = 'What number is missing in the progression?';

const startProgressionGame = () => {
  const progression = createProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);
  const result = progression[randomIndex];
  progression[randomIndex] = '..';

  return [result, ...progression];
};

export default () => launchGame(rule, startProgressionGame);
