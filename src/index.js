import promptly from 'promptly';

export const greetByName = async () => {
  console.log('Welcome to the Brain Games!\nMay I have your name?');
  const name = await promptly.prompt('Your answer: ');
  console.log(`Hello, ${name}!`);

  return name;
};

export const launchGame = async (gameRule, gameFunction) => {
  const userName = await greetByName();

  console.log(gameRule);

  for (let counter = 1; counter <= 3; counter += 1) {
    const [result, ...gameElements] = gameFunction();
    const expression = gameElements.join(' ');

    console.log(`Question: ${expression}`);

    const userAnswer = await promptly.prompt('Your answer: ');
    const rightAnswer = result.toString();

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
