import promptly from 'promptly';

const numberOfRounds = 3;

const launchGame = async (gameRule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  const userName = await promptly.prompt('Your answer: ');

  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let currentRound = 0; currentRound < numberOfRounds; currentRound += 1) {
    const [rightAnswer, question] = getGameData();

    console.log(`Question: ${question}`);

    const userAnswer = await promptly.prompt('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
