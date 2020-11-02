import promptly from 'promptly';

const launchGame = async (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');

  const userName = await promptly.prompt('Your answer: ');

  console.log(`Hello, ${userName}!\n${gameRule}`);

  const numberOfRounds = 3;

  for (let currentRound = 0; currentRound < numberOfRounds; currentRound += 1) {
    const [operationResult, questionValue] = getGameData();

    console.log(`Question: ${questionValue}`);

    const userAnswer = await promptly.prompt('Your answer: ');
    const rightAnswer = operationResult;

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
